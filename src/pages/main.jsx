import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
	return (
	<div>
		<h1>React routed here, hopefully!</h1>
		<small>This is small text</small>
		
		<Link to='/my-app/users'>Show Users page</Link>
	</div>
	);
};

export default MainPage;
