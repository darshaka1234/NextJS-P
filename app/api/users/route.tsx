import { UserType } from "../../types/userType";
import { NextRequest, NextResponse } from "next/server";

export const GET = (requset: NextRequest) => {
	const data: UserType[] = [
		{ id: 1, name: "saman", email: "saman@gmail.com" },
		{ id: 2, name: "kaman", email: "kaman@gmail.com" },
	];
	return NextResponse.json(data, { status: 200 });
};
