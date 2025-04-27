import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from './Button';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80",
    title: "Violino",
    description: "Aprenda com os melhores mestres da música clássica"
  },
  {
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&q=80",
    title: "Piano",
    description: "Descubra a magia das teclas com professores experientes"
  },
  {
    image: "https://images.unsplash.com/photo-1621784166258-c6fdfff31879?auto=format&fit=crop&q=80",
    title: "Violão",
    description: "Do clássico ao contemporâneo, encontre seu estilo"
  },
  {
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&q=80",
    title: "Orquestra EMADVS",
    description: "Faça parte da nossa renomada orquestra"
  }
];

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => {
    setCurrentIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setCurrentIndex((current) => (current + 1) % slides.length);
  };

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-transform duration-500 ease-in-out",
            {
              "translate-x-0": index === currentIndex,
              "translate-x-full": index > currentIndex,
              "-translate-x-full": index < currentIndex,
            }
          )}
        >
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
            <p className="text-xl mb-6">{slide.description}</p>
          </div>
        </div>
      ))}
      
      <Button
        variant="outline"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border-white/20"
        onClick={prev}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="outline"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border-white/20"
        onClick={next}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-colors",
              index === currentIndex ? "bg-white" : "bg-white/50"
            )}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}