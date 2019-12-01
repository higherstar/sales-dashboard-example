import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
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
import { SupportIcon, SettingsIcon, ProductsIcon, CustomersIcon, SalesIcon, HomeIcon } from "./components/SvgIcons";

import './App.css';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: 'white',
    width: '100%',
    marginLeft: 0,
    zIndex: 1300
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#373737'
  },
  customAppBar: {
    boxShadow: '0px 1px 0px #0000000F'
  },
  toolbar: theme.mixins.toolbar,
  customToolbar: {
    boxShadow: 'none !important'
  },
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
        <AppBar position="fixed" className={clsx(classes.appBar, classes.customAppBar)}>
          <Toolbar/>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <div className={clsx(classes.toolbar, classes.customToolbar)} />
          <Divider />
          <List>
            <ListItem button onClick={() => history.push('/distributors')}>
              <ListItemIcon><HomeIcon/></ListItemIcon>
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
