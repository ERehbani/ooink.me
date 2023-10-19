// import { prisma } from "@/libs/prisma";
import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req) {
  const code = req.nextUrl.searchParams.get("code");

  try {
    const data = await prisma.link.findFirst({
      where: { code }
    });

    //console.log(JSON.stringify(data));
    if (data) {
      console.log(JSON.stringify(data));
      return new NextResponse(JSON.stringify(data));
    } else {
      return new NextResponse({ error: "Código no encontrado" });
    }
  } catch (error) {
    return new NextResponse({ error: "Error al buscar el código" });
  }
}
export async function POST(req) {
  const { userName, webLink } = await req.json();

  const generateCode = () => {
    while (1) {
      let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let code = "🐽:";

      for (var i = 0; i < 6; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        code += characters[randomIndex];
      }
      return code;
    }
  };
  const newCode = await prisma.link.create({
    data: {
      userName,
      webLink,
      code: generateCode()
    }
  });
  return NextResponse.json(newCode);
}

/* sexport async function DELETE() {
    const deleteUser = await prisma.link.delete({
        where: {
          id: 3,
        },
      })
      return NextResponse.json(deleteUser)
} */
