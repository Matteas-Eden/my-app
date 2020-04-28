import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll';

import AppBar from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';

import { SignatureBasic } from '../components/SignatureBasic';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  active: {
    borderBottom: '1px solid #333',
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

function AppAppBar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} >
            <Link to="top" spy={true} smooth={true} duration={500} className={classes.title}>
              <SignatureBasic strokeColour='#fff' strokeWidth='20' size='2em' />
            </Link>
          </div>
          <div className={classes.right}>
            <Link to="tech" spy={true} smooth={true} duration={500} activeClass={'active'}>
              <Typography variant="h6" className={classes.rightLink}>Technology</Typography>
            </Link>
            <Link to="sites" spy={true} smooth={true} duration={500} activeClass={'active'}>
              <Typography variant="h6" className={clsx(classes.rightLink, classes.linkSecondary)}>Websites</Typography>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
