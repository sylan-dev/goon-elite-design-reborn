
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Star, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-luxury-dark via-luxury-charcoal to-luxury-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23D4AF37" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-1 bg-luxury-gold"></div>
                <span className="text-luxury-gold font-medium tracking-wider uppercase text-sm">Transfer Executivo</span>
              </div>
              
              <h1 className="font-luxury text-5xl lg:text-7xl font-bold text-white leading-tight">
                Viaje com
                <span className="text-luxury-gold block">Excelência</span>
              </h1>
              
              <p className="text-xl text-luxury-platinum leading-relaxed max-w-lg">
                Experimente o mais alto padrão em transporte executivo. Luxo, conforto e segurança em cada viagem, com motoristas profissionais e veículos premium.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-6 h-6 text-luxury-gold" />
                </div>
                <p className="text-white font-medium">100% Seguro</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Star className="w-6 h-6 text-luxury-gold" />
                </div>
                <p className="text-white font-medium">5 Estrelas</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Clock className="w-6 h-6 text-luxury-gold" />
                </div>
                <p className="text-white font-medium">24/7</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-luxury-gold text-luxury-dark hover:bg-luxury-gold-light transition-all duration-300 font-semibold text-lg px-8 py-4 group"
              >
                Solicitar Transfer
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-dark transition-all duration-300 font-semibold text-lg px-8 py-4"
              >
                Ver Frota
              </Button>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Luxurious car interior representing comfort and elegance"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/20 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-2xl animate-scale-in">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-luxury-dark" />
                </div>
                <div>
                  <p className="font-bold text-2xl text-luxury-dark">5.0</p>
                  <p className="text-sm text-gray-600">Avaliação média</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-luxury-gold rounded-xl p-6 shadow-2xl animate-scale-in">
              <div className="text-center">
                <p className="font-bold text-2xl text-luxury-dark">500+</p>
                <p className="text-sm text-luxury-dark">Clientes VIP</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-luxury-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-luxury-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
