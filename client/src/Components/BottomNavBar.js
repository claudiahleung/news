import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Account from '@material-ui/icons/Person';
import Grade from '@material-ui/icons/Grade';
import Home from '@material-ui/icons/Home';

const styles = theme => ({
  appBar: {
    display: 'flex',
    position: 'relative',
    backgroundColor: "#87BCBF",
    maxWidth: 450
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
});


function BottomAppBar(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton>
            <Home />
          </IconButton>
          <IconButton>
            <Grade />
          </IconButton>
          <IconButton>
            <Account />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

BottomAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomAppBar);
