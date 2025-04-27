import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Music, ChevronDown } from 'lucide-react';
import { Button } from './components/Button';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Home } from './pages/Home';
import { Matricula } from './pages/Matricula';
import { Sobre } from './pages/Sobre';
import { useNavigate } from 'react-router-dom';
import { cn } from './lib/utils';

function DropdownButton({ label, items }: { label: string; items: { label: string; onClick: () => void }[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        variant="outline"
        className="flex items-center gap-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
      </Button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  item.onClick();
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Header() {
  const navigate = useNavigate();

  const cursos = [
    { label: 'Violino', onClick: () => navigate('/cursos/violino') },
    { label: 'Piano', onClick: () => navigate('/cursos/piano') },
     { label: 'Flauta transversal', onClick: () => navigate('/cursos/flautatransversal') },
     { label: 'Trombone', onClick: () => navigate('/cursos/trombone') },
     { label: 'Viola', onClick: () => navigate('/cursos/viola') },
     { label: 'Clarone', onClick: () => navigate('/cursos/clarone') },
     { label: 'Oboé', onClick: () => navigate('/cursos/oboé') },
     { label: 'Trombone', onClick: () => navigate('/cursos/trombone') },
     { label: 'Clarinete', onClick: () => navigate('/cursos/clarinete') },
     { label: 'Saxofone', onClick: () => navigate('/cursos/saxofone') },
     { label: 'Trompete', onClick: () => navigate('/cursos/trompete') },
     { label: 'Tuba', onClick: () => navigate('/cursos/tuba') },
    { label: 'violoncelo', onClick: () => navigate('/cursos/violoncelo') },
     { label: 'Violão', onClick: () => navigate('/cursos/violao') },
    { label: 'Teoria Musical', onClick: () => navigate('/cursos/teoria') },
  ];

  const institucional = [
    { label: 'Sobre Nós', onClick: () => navigate('/sobre') },
    { label: 'Nossa História', onClick: () => navigate('/historia') },
    { label: 'Professores', onClick: () => navigate('/professores') },
    { label: 'Contato', onClick: () => navigate('/contato') },
  ];

  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => navigate('/')}
          >
            <Music className="h-8 w-8 text-blue-600" />
            <div className="ml-2">
              <span className="text-xl font-bold text-gray-900">EMADVS</span>
              <span className="block text-sm text-gray-600">Escola de Música ADVS</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <DropdownButton label="Cursos" items={cursos} />
            <DropdownButton label="Institucional" items={institucional} />
            <Button 
              variant="outline"
              onClick={() => navigate('/login')}
            >
              Entrar
            </Button>
            <Button
              onClick={() => navigate('/matricula')}
            >
              Cadastrar
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base text-gray-400">
            © 2024 EMADVS - Escola de Música ADVS. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/matricula" element={<Matricula />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>

        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;