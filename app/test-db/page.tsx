'use client';

import { useState } from 'react';
import { auth, database } from '@/lib/firebase';
import { ref, set } from 'firebase/database';
import { signInAnonymously } from 'firebase/auth';

export default function TestDBPage() {
  const [message, setMessage] = useState('');

  const testDatabase = async () => {
    try {
      // 1. Tentar login anônimo
      setMessage('Fazendo login anônimo...');
      const userCredential = await signInAnonymously(auth);
      
      // 2. Tentar escrever no banco
      setMessage('Testando escrita no banco...');
      const testRef = ref(database, 'test/' + Date.now());
      await set(testRef, {
        timestamp: Date.now(),
        message: 'Teste de escrita',
        userId: userCredential.user.uid
      });
      
      setMessage('✅ Teste realizado com sucesso!');
    } catch (error) {
      console.error('Erro:', error);
      setMessage('❌ Erro: ' + (error instanceof Error ? error.message : String(error)));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-lg font-medium leading-6 text-gray-900 mb-4">
            Teste do Firebase
          </h1>
          
          <button
            onClick={testDatabase}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0DBAAD] hover:bg-[#04695E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0DBAAD]"
          >
            Testar Conexão
          </button>

          {message && (
            <div className={`mt-4 p-4 rounded-md ${
              message.includes('✅') 
                ? 'bg-green-50 text-green-700' 
                : message.includes('❌')
                  ? 'bg-red-50 text-red-700'
                  : 'bg-blue-50 text-blue-700'
            }`}>
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 