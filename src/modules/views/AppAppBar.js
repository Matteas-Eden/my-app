import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { withStyles } from '@material-ui/core/styles';
// import Link from '@material-ui/core/Link';
import {Link, animateScroll as Scroll } from 'react-scroll';

import AppBar from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';

import { SignatureBasic } from '../components/SignatureBasic';

const ScrollLink = Scroll.ScrollLink;

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
            {/* <Link
              variant="h6"
              underline="none"
              color="inherit"
              className={classes.title}
              href="/my-app/#home"
            >
              <SignatureBasic strokeColour='#fff' strokeWidth='20' size='2em' />
            </Link> */}
            <Link to="intro" spy={true} smooth={true} duration={500} className={classes.title}>
              <SignatureBasic strokeColour='#fff' strokeWidth='20' size='2em' />
            </Link>
          </div>
          <div className={classes.right}>
            <Link to="sites" spy={true} smooth={true} duration={500} className={classes.rightLink} activeClass={'active'}>
              Sites
            </Link>
            <Link to="footer" spy={true} smooth={true} duration={500} className={clsx(classes.rightLink, classes.linkSecondary)} activeClass={'active'}>
              Footer
            </Link>
            {/* <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              href="/my-app/sites"
            >
              {'Sites'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
              href="/my-app/contact"
            >
              {'Contact'}
            </Link> */}
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
