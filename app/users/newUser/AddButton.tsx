"use client";
import React from "react";

const AddButton = () => {
	return (
		<div className='p-4'>
			<button
				className='btn btn-primary'
				onClick={() => console.log("Clicked")}>
				Add User
			</button>
		</div>
	);
};

export default AddButton;
