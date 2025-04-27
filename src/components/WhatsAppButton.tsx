import { Phone } from 'lucide-react';

export function WhatsAppButton() {
  const phoneNumber = "5511957210280";
  const message = "Olá! Gostaria de saber mais sobre a EMADVS.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 flex items-center gap-2"
    >
      <Phone className="h-6 w-6" />
      <span className="hidden md:inline">Fale Conosco</span>
    </a>
  );
}