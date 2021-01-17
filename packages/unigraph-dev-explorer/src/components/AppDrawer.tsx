import React from 'react';
import { Link } from 'react-router-dom';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { Comment, Home, Info, LibraryBooks, Storage } from '@material-ui/icons';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: {
    minHeight: '48px !important'
  },
}));

export default function DrawerRouter() {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon><Home /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/about">
          <ListItemIcon><Info /></ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component={Link} to="/request">
          <ListItemIcon><Comment /></ListItemIcon>
          <ListItemText primary="Request" />
        </ListItem>
        <ListItem button component={Link} to="/library">
          <ListItemIcon><LibraryBooks /></ListItemIcon>
          <ListItemText primary="Library" />
        </ListItem>
        <ListItem button component={Link} to="/schema/new">
          <ListItemIcon><Storage /></ListItemIcon>
          <ListItemText primary="Add Schema" />
        </ListItem>
        <Divider/>
        <ListItem button component={Link} to="/examples/todo">
          <ListItemIcon><Storage /></ListItemIcon>
          <ListItemText primary="Todo list" />
        </ListItem>
      </List>
    </Drawer>
  );
}