import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";



// Get all Students
export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();

    const students = await prisma.users.findMany();
    return NextResponse.json({ data: students, status: "success" });
  } catch (error) {
    return NextResponse.json({ data: error, status: "fail" });
  }
}
