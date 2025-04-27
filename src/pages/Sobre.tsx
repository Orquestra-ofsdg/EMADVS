import React from 'react';

export function Sobre() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Sobre a EMADVS</h1>
          <p className="mt-4 text-xl text-gray-600">
            Excelência em educação musical desde 1990
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nossa História</h2>
            <p className="text-gray-600">
              A Escola de Música ADVS nasceu do sonho de proporcionar educação musical de qualidade
              para todos. Ao longo de mais de três décadas, formamos centenas de músicos que hoje
              atuam em orquestras e grupos musicais por todo o Brasil.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Metodologia</h2>
            <p className="text-gray-600">
              Nossa metodologia única combina o melhor do ensino tradicional com técnicas modernas
              de aprendizado. Focamos no desenvolvimento individual de cada aluno, respeitando seu
              ritmo e objetivos pessoais.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Corpo Docente</h2>
            <p className="text-gray-600">
              Contamos com professores altamente qualificados, todos com formação superior em música
              e vasta experiência tanto no ensino quanto na performance musical.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Infraestrutura</h2>
            <p className="text-gray-600">
              Nossas instalações incluem salas acusticamente tratadas, instrumentos de alta qualidade
              e tecnologia de ponta para garantir a melhor experiência de aprendizado.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}