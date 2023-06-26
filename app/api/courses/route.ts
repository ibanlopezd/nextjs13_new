import { NextRequest, NextResponse } from 'next/server'
import courses from './data.json'

export async function GET(request: NextRequest) {
    return NextResponse.json(courses);
}

export async function POST(request: NextRequest) {
    const { title } = await request.json();

    return NextResponse.json({ message: 'Course Created: ' + title })
}