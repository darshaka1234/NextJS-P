import Link from "next/link";
import React from "react";
import { sort } from "fast-sort";
import { UserType } from "../types/userType";

interface Prop {
	sortOrder: string;
}

const UsersTable = async ({ sortOrder }: Prop) => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const data: UserType[] = await res.json();

	const sortedData = sort(data).asc((u) =>
		sortOrder === "email" ? u.name : u.email
	);

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>
							<Link href={"/users?sortOrder=name"}>Name</Link>
						</th>
						<th>
							<Link href={"/users?sortOrder=email"}>Email</Link>
						</th>
					</tr>
				</thead>
				<tbody>
					{sortedData.map((item: any) => (
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

export default UsersTable;
