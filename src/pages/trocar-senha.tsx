import { useState } from 'react';
import { useRouter } from 'next/router';

export default function TrocarSenha() {
  const [novaSenha, setNovaSenha] = useState('');
  const router = useRouter();

  const handleTrocarSenha = async () => {
    if (novaSenha.length < 6) {
      alert('A senha deve ter no mínimo 6 caracteres.');
      return;
    }

    localStorage.setItem('senha', novaSenha); // Armazenando no LocalStorage

    alert('Senha alterada com sucesso!');
    router.push('/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6">Trocar Senha</h1>
        <input
          type="password"
          placeholder="Nova senha"
          value={novaSenha}
          onChange={(e) => setNovaSenha(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <button
          onClick={handleTrocarSenha}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Confirmar
        </button>
      </div>
    </div>
  );
}
