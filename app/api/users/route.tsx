import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";


export const GET = async(requset: NextRequest) => {

	const users = await prisma.user.findMany();

	return NextResponse.json(users, { status: 200 });
};

export const POST = async(request: NextRequest) => {
	const body = await request.json();

	const newUser = await prisma.user.create({data:{name: body.name, email: body.email}})

	return NextResponse.json(newUser, {status: 201})
}
