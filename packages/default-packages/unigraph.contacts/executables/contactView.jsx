const {data, callbacks, inline} = params;
const name = data?.get('name')?.as('primitive');
console.log(data.get('emails'));

if (inline) return <strong>{data?.get('name')?.as('primitive')} {"<" + (callbacks.identifier || data['_value']['emails']['_value['][0]['_value.%']) + ">"}</strong>

return <div style={{display: "flex", alignItems: "center"}}>
    <ListItemIcon><Avatar alt={"profile image of " + data.get('name')?.as('primitive')} src={data.get('profile_image')?.as('primitive')}></Avatar></ListItemIcon>
    <ListItemText>
        <Typography>{name || data['_value']['emails']['_value['][0]['_value.%']}</Typography>
        <div style={{ display: "inline", alignItems: "center", overflowWrap: "break-word", color: "gray" }}>
            <p style={{ fontSize: "0.875rem", display: "contents" }}>{data.get('emails')['_value['][0]['_value.%']}</p>
        </div>
    </ListItemText>
</div>