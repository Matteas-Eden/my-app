import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles'
import { Grid, Typography, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	root: {
	  flexGrow: 1,
	},
	paper: {
	  height: 500,
	  width: 300,
	},
  }));
  

export const MainPage = () => {

	const classes = useStyles();

	return (
		<Grid container direction='row' justify='center' alignItems='center' spacing={3}>
			<Grid item xs={12}>
				<Grid container justify="center" spacing={3}>
				{[0, 1, 2].map(value => (
					<Grid key={value} item>
					<Paper className={classes.paper}>
						<Typography>This is a card</Typography>		
					</Paper>
					</Grid>
				))}
				</Grid>
			</Grid>
			<Grid item xs={12}>
				<h1>React routed here, hopefully!</h1>
				<small>This is small text</small>
		
				<Link to='/my-app/users'>Show Users page</Link>
			</Grid>
		</Grid>
	);
};
