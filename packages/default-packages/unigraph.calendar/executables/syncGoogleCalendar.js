const { google } = require('googleapis');

const gcalColorMap = {
    '#AC725E': '#795548',
    '#D06B64': '#e67c73',
    '#F83A22': '#d50000',
    '#FA573C': '#f4511e',
    '#FF7537': '#ef6c00',
    '#FFAD46': '#f09300',
    '#42D692': '#009688',
    '#16A765': '#0b8043',
    '#7BD148': '#7cb342',
    '#B3DC6C': '#c0ca33',
    '#FBE983': '#e4c441',
    '#FAD165': '#f6bf26',
    '#92E1C0': '#33b679',
    '#9FE1E7': '#039be5',
    '#9FC6E7': '#4285f4',
    '#4986E7': '#3f51b5',
    '#9A9CFF': '#7986cb',
    '#B99AFF': '#b39ddb',
    '#C2C2C2': '#616161',
    '#CABDBF': '#a79b8e',
    '#CCA6AC': '#ad1457',
    '#F691B2': '#d81b60',
    '#CD74E6': '#8e24aa',
    '#A47AE2': '#9e69af',
};

const gmailClientId = unigraph.getSecret('google', 'client_id');
const gmailClientSecret = unigraph.getSecret('google', 'client_secret');
const fetch = require('node-fetch');

const account = (
    await unigraph.getQueries([
        `(func: uid(accs)) @cascade {
    uid
    type {<unigraph.id>}
    _value {
        site {
            _value {
                _value {
                    name @filter(eq(<_value.%>, "Google")) {
                        <_value.%>
                    }
                }
            }
        }
        access_token { <_value.%> }
        token_expires_in { <_value.%dt> }
        refresh_token { <_value.%> }
    }
}

var(func: eq(<unigraph.id>, "$/schema/internet_account")) {
    <~type> { accs as uid }
}`,
    ])
)?.[0]?.[0];

if (account?.uid) {
    let token = account._value.access_token['_value.%'];
    const refresh = account._value.refresh_token['_value.%'];

    const resp = await fetch('https://www.googleapis.com/oauth2/v4/token', {
        method: 'POST',
        body: JSON.stringify({
            grant_type: 'refresh_token',
            refresh_token: refresh,
            client_id: gmailClientId,
            client_secret: gmailClientSecret,
        }),
    });

    const accessTokenResult = await resp.json();
    if (accessTokenResult.access_token) token = accessTokenResult.access_token;

    await unigraph.updateObject(
        account.uid,
        {
            access_token: token,
            token_expires_in: new Date(new Date().getTime() + 3600 * 1000).toISOString(),
        },
        undefined,
        undefined,
        [],
    );

    const auth = new google.auth.OAuth2(gmailClientId, gmailClientSecret, 'https://localhost:4001/callback?key=gmail');
    auth.setCredentials({ ...accessTokenResult, access_token: token });

    const calendar = google.calendar({
        version: 'v3',
        auth,
    });

    const cals = (await calendar.calendarList.list()).data.items;
    const calObjs = cals
        .filter((it) => it.selected)
        .map((cal) => {
            return {
                id: cal.id,
                foreground_color: gcalColorMap[cal.foregroundColor.toUpperCase()] || cal.foregroundColor,
                color: gcalColorMap[cal.backgroundColor.toUpperCase()] || cal.backgroundColor,
                name: { type: { 'unigraph.id': '$/schema/markdown' }, _value: cal.summary },
            };
        });
    const uids = await unigraph.addObject(calObjs, '$/schema/calendar', undefined, []);
    for (let i = 0; i < calObjs.length; ++i) {
        await unigraph.runExecutable('$/executable/sync-google-calendar-specific', { uid: uids[i] }, { calendar });
    }
}
