import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from '../components/Carousel';
import { Button } from '../components/Button';
import { BackgroundMusic } from '../components/BackgroundMusic';

export function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section with Carousel */}
      <div className="relative">
        <Carousel />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white z-10">
            <h1 className="text-6xl font-bold mb-4">EMADVS</h1>
            <p className="text-2xl mb-8">Escola de Música ADVS</p>
            <div className="space-x-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => navigate('/matricula')}
              >
                Comece sua jornada musical
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white hover:bg-white/10"
                onClick={() => navigate('/sobre')}
              >
                Saiba mais
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nossa Missão
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              A EMADVS tem como missão formar músicos excelentes, comprometidos com a qualidade e dedicados ao
              desenvolvimento contínuo de suas habilidades musicais.
            </p>
          </div>
        </div>
      </section>

      {/* Background Music */}
      <BackgroundMusic />
    </>
  );
}
