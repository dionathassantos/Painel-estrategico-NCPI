'use client';

import { useState } from 'react';
import { auth, database, db } from '@/lib/firebase';
import { ref, set } from 'firebase/database';
import { collection, addDoc } from 'firebase/firestore';
import { signInAnonymously } from 'firebase/auth';

export default function TestDBPage() {
  const [message, setMessage] = useState('');
  const [user, setUser] = useState<any>(null);

  const testRealtime = async () => {
    try {
      if (!user) {
        setMessage('Fazendo login anônimo...');
        const userCredential = await signInAnonymously(auth);
        setUser(userCredential.user);
        setMessage('Login realizado com sucesso!');
      }

      setMessage('Testando Realtime Database...');
      const testRef = ref(database, 'test/' + Date.now());
      await set(testRef, {
        timestamp: Date.now(),
        message: 'Teste de escrita',
      });
      setMessage('Realtime Database: Escrita realizada com sucesso!');
    } catch (error) {
      console.error('Erro Realtime:', error);
      setMessage('Erro Realtime: ' + (error instanceof Error ? error.message : String(error)));
    }
  };

  const testFirestore = async () => {
    try {
      if (!user) {
        setMessage('Fazendo login anônimo...');
        const userCredential = await signInAnonymously(auth);
        setUser(userCredential.user);
        setMessage('Login realizado com sucesso!');
      }

      setMessage('Testando Firestore...');
      const docRef = await addDoc(collection(db, 'test'), {
        timestamp: Date.now(),
        message: 'Teste de escrita',
      });
      setMessage('Firestore: Documento criado com ID: ' + docRef.id);
    } catch (error) {
      console.error('Erro Firestore:', error);
      setMessage('Erro Firestore: ' + (error instanceof Error ? error.message : String(error)));
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-md mx-auto space-y-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-[#04695E] mb-4">Teste de Banco de Dados</h1>
          
          <div className="space-y-4">
            <button
              onClick={testRealtime}
              className="w-full bg-[#0DBAAD] hover:bg-[#04695E] text-white py-2 px-4 rounded transition-colors"
            >
              Testar Realtime Database
            </button>

            <button
              onClick={testFirestore}
              className="w-full bg-[#0DBAAD] hover:bg-[#04695E] text-white py-2 px-4 rounded transition-colors"
            >
              Testar Firestore
            </button>

            {message && (
              <div className={`p-4 rounded ${
                message.includes('sucesso') 
                  ? 'bg-green-50 text-green-700 border border-green-200'
                  : message.includes('Erro')
                    ? 'bg-red-50 text-red-700 border border-red-200'
                    : 'bg-blue-50 text-blue-700 border border-blue-200'
              }`}>
                {message}
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-2">Como usar:</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            <li>Clique em um dos botões acima</li>
            <li>O sistema tentará fazer login anônimo primeiro</li>
            <li>Depois tentará escrever no banco de dados escolhido</li>
            <li>Observe a mensagem de resultado</li>
            <li>Se houver erro, verifique o console (F12)</li>
          </ol>
        </div>
      </div>
    </main>
  );
} 