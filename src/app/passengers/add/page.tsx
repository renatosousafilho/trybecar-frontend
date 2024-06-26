'use client'

import { createPassenger } from '@/app/service/api';
import { redirect } from 'next/navigation';
import { use, useState } from 'react';
import { useRouter } from 'next/navigation';


export default function AddPassenger() {
  const router = useRouter();
  const [messageVisible, setMessageVisible] = useState(false)


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    createPassenger(formData).then(() => {
      setMessageVisible(true)
      setTimeout(() => {
        router.push('/passengers');  
      }, 3000);
    }).catch((error) => {
      console.error(error);
    });
  };

  const handleBack = () => {
    redirect('/passengers');
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }))
  }

  return (
    <div>
      {messageVisible && (
        <div className="message bg-green-500 p-4 rounded flex items-center justify-center">
          🎉 <span className="ml-2">Passenger added successfully! Redirecting....</span>
        </div>
      )}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className='mb-4'>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Nome
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Nome do jogador"
            name='name'
            value={formData.name}
            onChange={handleInput}
          />
        </div>

        <div className='mb-4'>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              E-mail
          </label>
          <input
            type="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="E-mail"
            name='email'
            value={formData.email}
            onChange={handleInput}
          />
        </div>

        <div className='mb-4'>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              E-mail
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Telefone"
            name='phone'
            value={formData.phone}
            onChange={handleInput}
          />
        </div>

        <div className="flex justify-end">
          <button
            className="bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleBack}>
            Voltar
          </button>
          <button 
            className="bg-[#0C6D18] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
            type="submit">
            Adicionar jogador
          </button>
        </div>
      </form>
    </div>
  );
}