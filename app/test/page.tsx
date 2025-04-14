'use client';

import { useEffect, useState } from 'react';
import { testWriteToFirestore } from '@/lib/firebase-operations';

export default function TestPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const runTest = async () => {
    try {
      setStatus('loading');
      const docId = await testWriteToFirestore();
      console.log('Iniciativa de teste criada com ID:', docId);
      setStatus('success');
    } catch (err) {
      console.error('Erro ao criar iniciativa:', err);
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-[#04695E]">Teste de Criação de Iniciativa</h1>
        
        <button 
          onClick={runTest}
          disabled={status === 'loading'}
          className="bg-[#0DBAAD] hover:bg-[#04695E] text-white px-6 py-2 rounded-full text-sm font-medium shadow-sm transition-colors disabled:opacity-50"
        >
          {status === 'loading' ? 'Criando...' : 'Criar Iniciativa de Teste'}
        </button>

        {status === 'loading' && (
          <div className="mt-4">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#04695E] mx-auto"></div>
            <p className="text-gray-600 mt-2">Criando iniciativa...</p>
          </div>
        )}

        {status === 'success' && (
          <p className="text-green-600 mt-4">Iniciativa criada com sucesso! Verifique o console para mais detalhes.</p>
        )}

        {status === 'error' && (
          <p className="text-red-600 mt-4">Erro: {error}</p>
        )}
      </div>
    </div>
  );
} 