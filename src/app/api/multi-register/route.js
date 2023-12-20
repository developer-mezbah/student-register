import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function PUT(req, res) {
  const bodyData = await req.json();
  try {
    const prisma = new PrismaClient()
    const multiStudentsRegister = await prisma.users.createMany({
        data: bodyData
    })
    
    return NextResponse.json({data: multiStudentsRegister, status: "success"})
  } catch (error) {
    return NextResponse.json({ data: error, status: "fail" });
  }
}
