import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";


// Register single students
export async function POST(req, res) {
  try {
    const reqBody = await req.json();
    const { firstName, lastName, email, password, age, grade, courses } = reqBody;
    const prisma = new PrismaClient();

    const newStudent = await prisma.users.create({
      data: { firstName, lastName, email, password, age, grade, courses },
    });
    return NextResponse.json({ data: newStudent, status: "success" });
  } catch (error) {
    return NextResponse.json({ data: error, status: "fail" });
  }
}
