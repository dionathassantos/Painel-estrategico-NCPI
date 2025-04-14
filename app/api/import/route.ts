import { NextResponse } from 'next/server';
import { importFromJson } from '@/lib/import-data';

export async function POST() {
  try {
    const result = await importFromJson();
    
    if (result.success) {
      return NextResponse.json(result, { status: 200 });
    } else {
      return NextResponse.json(result, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erro ao processar importação',
        error: error instanceof Error ? error.message : 'Erro desconhecido'
      }, 
      { status: 500 }
    );
  }
} 