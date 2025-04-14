'use client';

import { useState } from 'react';
import { auth } from '@/lib/firebase';
import { getDatabase, ref, set } from 'firebase/database';
import { signInAnonymously } from 'firebase/auth';

export default function FirebaseTestPage() {
  const [message, setMessage] = useState('');

  const testFirebase = async () => {
    try {
      setMessage('Iniciando teste...');
      
      // Primeiro, fazer login anônimo
      setMessage('Autenticando...');
      const userCredential = await signInAnonymously(auth);
      
      // Depois tentar escrever no banco
      setMessage('Testando escrita...');
      const db = getDatabase();
      const testRef = ref(db, 'test/' + userCredential.user.uid);
      
      await set(testRef, {
        test: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });

      setMessage(`Sucesso! Documento criado para usuário: ${userCredential.user.uid}`);
      console.log('Documento criado para usuário:', userCredential.user.uid);
    } catch (error) {
      console.error('Erro completo:', error);
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      setMessage(`Erro: ${errorMessage}`);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4 text-center">
        <h1 className="text-2xl font-bold text-[#04695E]">Teste do Firebase</h1>
        
        <div className="text-sm text-gray-600 mb-4">
          <p>Esta página testa a conexão com o Firebase tentando:</p>
          <ol className="list-decimal list-inside mt-2 space-y-1 text-left">
            <li>Fazer login anônimo</li>
            <li>Criar um documento de teste no Realtime Database</li>
          </ol>
        </div>

        <button
          onClick={testFirebase}
          className="w-full bg-[#0DBAAD] hover:bg-[#04695E] text-white py-3 px-6 rounded-lg font-medium transition-colors"
        >
          Testar Conexão
        </button>

        {message && (
          <div className={`p-4 border rounded ${
            message.includes('Erro') 
              ? 'border-red-300 bg-red-50 text-red-700' 
              : message.includes('Sucesso')
                ? 'border-green-300 bg-green-50 text-green-700'
                : 'border-blue-300 bg-blue-50 text-blue-700'
          }`}>
            {message}
          </div>
        )}
      </div>
    </main>
  );
} 