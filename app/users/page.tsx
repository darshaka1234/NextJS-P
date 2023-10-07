import React from "react";
import UsersTable from "./UsersTable";

interface Prop {
	searchParams: { sortOrder: string };
}

const AllPage = async ({ searchParams: { sortOrder } }: Prop) => {
	return (
		<div className='p-4'>
			<UsersTable sortOrder={sortOrder} />
		</div>
	);
};

export default AllPage;
