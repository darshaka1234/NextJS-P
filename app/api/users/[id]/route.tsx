import prisma from '@/prisma/client';
import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';


export const GET = async(request: NextRequest, {params}: {params : { id: string}})=>{
    const user = await prisma.user.findFirst({where: { id: parseInt(params.id)}})

    if(!user) return NextResponse.json("User Not found", {status: 404})

    return NextResponse.json(user, {status:200})
}

export const PUT = async(request: NextRequest, {params}: {params : { id: string}})=>{

    const user = await prisma.user.findFirst({where: { id: parseInt(params.id)}})
    const body = await request.json();

    if(!user) return NextResponse.json("User Not found", {status: 404})
    if(!body) return NextResponse.json("Bad Request", {status: 400})

    const updatedUser = await prisma.user.update({where: {id: parseInt(params.id)}, data: body})

    return NextResponse.json(updatedUser, {status:200})
}

export const DELETE = async(request: NextRequest, {params}: {params : { id: string}})=>{

    const user = await prisma.user.findFirst({where: { id: parseInt(params.id)}})

    if(!user) return NextResponse.json("User Not found", {status: 404})

    await prisma.user.delete({where: {id: parseInt(params.id)}})

    return NextResponse.json("Deleted", {status:200})
}


