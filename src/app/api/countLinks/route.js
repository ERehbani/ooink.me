import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()

export async function GET() {
    try {
        const response = await prisma.link.findMany()
        return new NextResponse(JSON.stringify(response))
    } catch (error) {
        
    }
}