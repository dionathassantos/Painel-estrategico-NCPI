import { NextRequest, NextResponse } from 'next/server';
import * as db from '@/lib/local-db';

type Context = {
  params: {
    id: string;
  };
};

export async function GET(
  request: NextRequest,
  context: Context
): Promise<NextResponse> {
  try {
    const initiative = await db.getInitiativeById(context.params.id);
    
    if (!initiative) {
      return NextResponse.json(
        { error: 'Initiative not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(initiative);
  } catch (error) {
    console.error('Error fetching initiative:', error);
    return NextResponse.json(
      { error: 'Failed to fetch initiative' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  context: Context
): Promise<NextResponse> {
  try {
    const updates = await request.json();
    const initiative = await db.updateInitiative(context.params.id, updates);
    
    return NextResponse.json(initiative);
  } catch (error) {
    console.error('Error updating initiative:', error);
    return NextResponse.json(
      { error: 'Failed to update initiative' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  context: Context
): Promise<NextResponse> {
  try {
    await db.deleteInitiative(context.params.id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting initiative:', error);
    return NextResponse.json(
      { error: 'Failed to delete initiative' },
      { status: 500 }
    );
  }
} 