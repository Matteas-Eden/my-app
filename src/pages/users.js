import React from 'react';

const UsersPage = () => {
	return (
	<div>
		<ul>
		{["Josh", "Kim", "Hassaan", "Kelvin", "Mat", "Sunny", "Ryan"].map((user,idx) => {
			return <li key={idx}>{user}</li>;
		})}
		</ul>
	</div>
	);
};

export default UsersPage
