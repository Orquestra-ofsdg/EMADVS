import React from 'react';
import { Button } from '../components/Button';

export function Matricula() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Matrícula</h1>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
                Nome completo
              </label>
              <input
                type="text"
                id="nome"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="telefone" className="block text-sm font-medium text-gray-700">
                Telefone
              </label>
              <input
                type="tel"
                id="telefone"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="curso" className="block text-sm font-medium text-gray-700">
                Curso de interesse
              </label>
              <select
                id="curso"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option>Violino</option>
                <option>Piano</option>
                <option>Trompete</option>
                <option>Trombone</option>
                <option>Saxofone</option>
                <option>Clarinete</option>
                <option>Flauta Transversal</option>
                <option>Clarone</option>
                <option>Tuba</option>
                <option>Fagote</option>
                <option>Oboé</option>
                <option>Trompa</option>
                <option>Viola</option>
                <option>Violoncelo</option>
                <option>Violão</option>
                <option>Teoria Musical</option>
              </select>
            </div>

            <Button type="submit" className="w-full">
              Enviar matrícula
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}