import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Distributors from './containers/Distributors';

import './App.css';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: 'white'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  contentContainer: {
    marginTop: 70,
    width: '100%'
  }
}));

function App({ history }) {
  const classes = useStyles();
  return (
    <div className="App">
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>

          </Toolbar>
        </AppBar>
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
            <ListItem button onClick={() => history.push('/distributors')}>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary="Distributors" />
            </ListItem>
            <ListItem button onClick={() => history.push('/sales-page')}>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary="Sales Page" />
            </ListItem>
            <ListItem button onClick={() => history.push('/products')}>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary="Products" />
            </ListItem>
            <ListItem button onClick={() => history.push('/customers')}>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary="Customers" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button onClick={() => history.push('/settings')}>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
            <ListItem button onClick={() => history.push('/support')}>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary="Support" />
            </ListItem>
          </List>
        </Drawer>

        <div className={classes.contentContainer}>
          <Switch>
            <Route path="/distributors" component={Distributors}/>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default withRouter(App);
