import React from 'react';

export const UsersPage = () => {
	return (
	<div>
		<ul>
		{["John", "Kate", "Harry", "Kevin", "Max", "Sarah", "Ryan"].map((user,idx) => {
			return <li key={idx}>{user}</li>;
		})}
		</ul>
	</div>
	);
};
