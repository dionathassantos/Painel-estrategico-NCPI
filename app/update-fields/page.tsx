'use client';

import { useEffect, useState } from 'react';
import { updateInitiativesWithMissingFields } from '@/lib/firebase-operations';

export default function UpdateFieldsPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const updateFields = async () => {
      try {
        setStatus('loading');
        await updateInitiativesWithMissingFields();
        setStatus('success');
      } catch (err) {
        setStatus('error');
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      }
    };

    updateFields();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Atualização de Campos</h1>
        {status === 'loading' && (
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#04695E] mx-auto"></div>
        )}
        {status === 'success' && (
          <p className="text-green-600">Campos atualizados com sucesso!</p>
        )}
        {status === 'error' && (
          <p className="text-red-600">Erro: {error}</p>
        )}
      </div>
    </div>
  );
} 