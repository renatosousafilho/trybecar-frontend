'use client'

import React, { useState } from 'react'
import { login } from '../service/api';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageBG, setMessageBG] = useState('');
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    login(email, password).then((data) => {
      console.log(data);
      localStorage.setItem('token', data.token);
      setMessageBG('bg-green-500');
      setMessage('Login realizado com sucesso!');
      // redirect to home page
      setTimeout(() => {
        router.push('/passengers');
      }, 3000);
    }).catch((error) => {
      console.log(error);
      setMessage(error.message);
      setMessageBG('bg-red-500');
    })
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>

        {message && (
          <p className={`text-white p-4 rounded ${messageBG}`}>{message}</p>
        )}

        <form className="space-y-4 pt-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
            <input type="email" name="email" id="email" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-trybe-green-focus focus:border-trybe-green-focus" onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
            <input type="password" name="password" id="password" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-trybe-green-focus focus:border-trybe-green-focus" onChange={(event) => setPassword(event.target.value)} />
          </div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-trybe-green hover:bg-trybe-green-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trybe-green-focus">
            Entrar
          </button>
        </form>
      </div>
    </div>
  )
}
