import React from "react";

interface User {
	id: number;
	name: string;
	email: string;
}

const AllUsers = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const data: User[] = await res.json();

	return (
		<div className='p-4'>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item) => (
						<tr key={item.id}>
							<td>{item.name}</td>
							<td>{item.email}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default AllUsers;
