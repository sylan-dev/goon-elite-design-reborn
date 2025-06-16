
import { Car, Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-luxury-dark text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-lg flex items-center justify-center">
                <Car className="w-6 h-6 text-luxury-dark" />
              </div>
              <div>
                <h3 className="font-luxury text-xl font-semibold">Executive Transfer</h3>
                <p className="text-luxury-gold text-xs">Luxury Transportation</p>
              </div>
            </div>
            <p className="text-luxury-platinum leading-relaxed">
              Redefinindo o transporte executivo com luxo, conforto e segurança. 
              Sua experiência premium começa aqui.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-luxury-gold/10 rounded-full flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-dark transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-luxury-gold/10 rounded-full flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-dark transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-luxury-gold/10 rounded-full flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-dark transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg text-luxury-gold">Serviços</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-luxury-platinum hover:text-luxury-gold transition-colors">Transfer Executivo</a></li>
              <li><a href="#" className="text-luxury-platinum hover:text-luxury-gold transition-colors">Transfer Aeroporto</a></li>
              <li><a href="#" className="text-luxury-platinum hover:text-luxury-gold transition-colors">Corporativo</a></li>
              <li><a href="#" className="text-luxury-platinum hover:text-luxury-gold transition-colors">Eventos Especiais</a></li>
              <li><a href="#" className="text-luxury-platinum hover:text-luxury-gold transition-colors">Turismo Executivo</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg text-luxury-gold">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-luxury-platinum hover:text-luxury-gold transition-colors">Início</a></li>
              <li><a href="#about" className="text-luxury-platinum hover:text-luxury-gold transition-colors">Sobre Nós</a></li>
              <li><a href="#services" className="text-luxury-platinum hover:text-luxury-gold transition-colors">Serviços</a></li>
              <li><a href="#testimonials" className="text-luxury-platinum hover:text-luxury-gold transition-colors">Depoimentos</a></li>
              <li><a href="#contact" className="text-luxury-platinum hover:text-luxury-gold transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg text-luxury-gold">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-luxury-gold" />
                <span className="text-luxury-platinum">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-luxury-gold" />
                <span className="text-luxury-platinum">contato@executivetransfer.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-luxury-gold" />
                <span className="text-luxury-platinum">São Paulo - SP<br />Grande São Paulo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-luxury-gold/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-luxury-platinum text-sm">
              © 2024 Executive Transfer. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-luxury-platinum hover:text-luxury-gold transition-colors">Política de Privacidade</a>
              <a href="#" className="text-luxury-platinum hover:text-luxury-gold transition-colors">Termos de Uso</a>
              <a href="#" className="text-luxury-platinum hover:text-luxury-gold transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
