'use client';

import { useEffect } from 'react';
import { testWriteToFirestore } from '@/lib/firebase-operations';

export default function TestFirebasePage() {
  useEffect(() => {
    const testFirestore = async () => {
      try {
        const docId = await testWriteToFirestore();
        console.log('Documento criado com sucesso! ID:', docId);
      } catch (error) {
        console.error('Erro ao testar Firestore:', error);
      }
    };

    testFirestore();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Teste do Firebase</h1>
        <p className="text-gray-600">Verifique o console do navegador para ver os resultados do teste.</p>
      </div>
    </div>
  );
} 