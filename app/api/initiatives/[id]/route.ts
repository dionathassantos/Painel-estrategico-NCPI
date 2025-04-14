import { NextResponse } from 'next/server';
import * as db from '@/lib/local-db';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const initiative = await db.getInitiativeById(params.id);
    
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
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const updates = await request.json();
    const initiative = await db.updateInitiative(params.id, updates);
    
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
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await db.deleteInitiative(params.id);
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error('Error deleting initiative:', error);
    return NextResponse.json(
      { error: 'Failed to delete initiative' },
      { status: 500 }
    );
  }
} 