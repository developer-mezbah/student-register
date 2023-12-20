import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// delete single student
export async function POST(req, { params }) {
  const id = parseInt(params.id);
  try {
    const prisma = new PrismaClient();
    const deletedUser = await prisma.users.delete({ where: { id } });

    return NextResponse.json({ data: deletedUser, status: "success" });
  } catch (error) {
    return NextResponse.json({ data: error, status: 401 });
  }
}

// update post
export async function PUT(req, { params }) {
  const id = parseInt(params.id);
  const reqBody = await req.json();
  const { firstName, lastName, email, password, age, grade, courses } = reqBody;
  try {
    const prisma = new PrismaClient();
    const updateStudent = await prisma.users.update({
      where: { id },
      data: { firstName, lastName, email, password, age, grade, courses },
    });
    return NextResponse.json({ data: updateStudent, status: "success" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ data: error, status: 401 });
  }
}

// Get Single student
export async function GET(req, {params}){
    const id = parseInt(params.id)
    try {
        const prisma = new PrismaClient()
        const singleStudent = await prisma.users.findUnique({
            where: {id},
        })
        return NextResponse.json({data: singleStudent, status: "success"})
    } catch (error) {
        return NextResponse.json({data: error, status: 401})
    }
}
