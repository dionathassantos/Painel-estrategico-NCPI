'use client';

import { useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function TestConnectionPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const testConnection = async () => {
    try {
      setStatus('loading');
      
      // Tenta criar uma coleção de teste
      const testDoc = await addDoc(collection(db, 'test_collection'), {
        message: 'Teste de conexão',
        timestamp: new Date()
      });

      console.log('Documento de teste criado com ID:', testDoc.id);
      setStatus('success');
    } catch (err) {
      console.error('Erro ao testar conexão:', err);
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-[#04695E] mb-6">Teste de Conexão com Firebase</h1>
        
        <div className="space-y-6">
          <div className="text-sm text-gray-600 mb-4">
            <p>Esta página testa a conexão com o Firebase tentando criar um documento simples.</p>
            <p className="mt-2">Se funcionar, significa que a conexão está ok.</p>
          </div>

          <button
            onClick={testConnection}
            disabled={status === 'loading'}
            className="w-full bg-[#0DBAAD] hover:bg-[#04695E] text-white py-3 px-6 rounded-lg font-medium transition-colors disabled:opacity-50"
          >
            {status === 'loading' ? 'Testando...' : 'Testar Conexão'}
          </button>

          {status === 'loading' && (
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#04695E]"></div>
              <p className="text-gray-600 mt-2">Testando conexão...</p>
            </div>
          )}

          {status === 'success' && (
            <div className="bg-green-50 text-green-700 p-4 rounded-lg">
              <p>Conexão estabelecida com sucesso!</p>
              <p className="text-sm mt-1">Verifique o console para mais detalhes.</p>
            </div>
          )}

          {status === 'error' && (
            <div className="bg-red-50 text-red-700 p-4 rounded-lg">
              <p className="font-medium">Erro na conexão:</p>
              <p className="text-sm mt-1">{error}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 