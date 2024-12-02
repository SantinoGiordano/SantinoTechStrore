import { NextResponse } from "next/server";

export async function GET() {
    return Response.json({ data: 'hello world' })

}