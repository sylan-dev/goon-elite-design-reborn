
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento para transfer executivo.', '_blank');
  };

  return (
    <header className="fixed top-0 w-full bg-luxury-dark/95 backdrop-blur-sm border-b border-luxury-gold/20 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-lg flex items-center justify-center">
              <span className="text-luxury-dark font-bold text-xl">GO</span>
            </div>
            <div>
              <h1 className="font-luxury text-xl text-white font-semibold">GoOn Transfer</h1>
              <p className="text-luxury-gold text-xs">Luxury Transportation</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-luxury-gold transition-colors duration-300">Início</a>
            <a href="#services" className="text-white hover:text-luxury-gold transition-colors duration-300">Serviços</a>
            <a href="#about" className="text-white hover:text-luxury-gold transition-colors duration-300">Sobre</a>
            <a href="#testimonials" className="text-white hover:text-luxury-gold transition-colors duration-300">Depoimentos</a>
            <a href="#contact" className="text-white hover:text-luxury-gold transition-colors duration-300">Contato</a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-luxury-platinum">
              <Phone className="w-4 h-4" />
              <span>(11) 99999-9999</span>
            </div>
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white transition-all duration-300 font-semibold"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-luxury-charcoal/95 backdrop-blur-sm border-t border-luxury-gold/20">
            <nav className="flex flex-col space-y-4 p-6">
              <a href="#home" className="text-white hover:text-luxury-gold transition-colors">Início</a>
              <a href="#services" className="text-white hover:text-luxury-gold transition-colors">Serviços</a>
              <a href="#about" className="text-white hover:text-luxury-gold transition-colors">Sobre</a>
              <a href="#testimonials" className="text-white hover:text-luxury-gold transition-colors">Depoimentos</a>
              <a href="#contact" className="text-white hover:text-luxury-gold transition-colors">Contato</a>
              <div className="pt-4 border-t border-luxury-gold/20">
                <div className="flex items-center space-x-2 text-sm text-luxury-platinum mb-4">
                  <Phone className="w-4 h-4" />
                  <span>(11) 99999-9999</span>
                </div>
                <Button 
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Orçamento WhatsApp
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
