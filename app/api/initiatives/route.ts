import { NextResponse } from 'next/server';
import * as db from '@/lib/local-db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const porta = searchParams.get('porta') as 'fora' | 'dentro' | undefined;
    
    const initiatives = await db.getInitiatives(porta);
    return NextResponse.json(initiatives);
  } catch (error) {
    console.error('Error fetching initiatives:', error);
    return NextResponse.json(
      { error: 'Failed to fetch initiatives' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const initiative = await request.json();
    const id = await db.createInitiative(initiative);
    
    return NextResponse.json({ id }, { status: 201 });
  } catch (error) {
    console.error('Error creating initiative:', error);
    return NextResponse.json(
      { error: 'Failed to create initiative' },
      { status: 500 }
    );
  }
} 