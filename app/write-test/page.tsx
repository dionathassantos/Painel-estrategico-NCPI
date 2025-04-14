'use client';

import { useState } from 'react';
import { createInitiative } from '@/lib/firebase-operations';

export default function WriteTestPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const writeTestData = async () => {
    try {
      setStatus('loading');
      
      const testInitiative = {
        title: "Iniciativa de Teste",
        description: "Esta é uma iniciativa de teste criada automaticamente",
        responsible: "Sistema",
        porta: "fora" as const,
        status: "satisfatorio" as const,
        resultados: [],
        metas: [],
        metasCount: 0,
        statusCounts: {
          satisfatorio: 0,
          alerta: 0,
          critico: 0,
          concluido: 0,
          naoMonitorado: 0
        },
        createdAt: new Date(),
        updatedAt: new Date()
      };

      const id = await createInitiative(testInitiative);
      console.log('Iniciativa criada com ID:', id);
      setStatus('success');
    } catch (err) {
      console.error('Erro ao criar iniciativa:', err);
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-[#04695E] mb-6">Teste de Escrita no Banco</h1>
        
        <div className="space-y-6">
          <button
            onClick={writeTestData}
            disabled={status === 'loading'}
            className="w-full bg-[#0DBAAD] hover:bg-[#04695E] text-white py-3 px-6 rounded-lg font-medium transition-colors disabled:opacity-50"
          >
            {status === 'loading' ? 'Criando...' : 'Criar Iniciativa de Teste'}
          </button>

          {status === 'loading' && (
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#04695E]"></div>
              <p className="text-gray-600 mt-2">Criando iniciativa...</p>
            </div>
          )}

          {status === 'success' && (
            <div className="bg-green-50 text-green-700 p-4 rounded-lg">
              Iniciativa criada com sucesso! Verifique o console para mais detalhes.
            </div>
          )}

          {status === 'error' && (
            <div className="bg-red-50 text-red-700 p-4 rounded-lg">
              Erro ao criar iniciativa: {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 