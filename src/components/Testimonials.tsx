
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "CEO, TechCorp",
      content: "Excepcional! A Executive Transfer transformou completamente minha experiência de viagem. O nível de profissionalismo e conforto é incomparável. Recomendo sem hesitação!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Roberto Santos",
      role: "Diretor Financeiro",
      content: "Pontualidade impecável e veículos de primeira linha. A equipe sempre me surpreende com a atenção aos detalhes. É minha escolha número 1 para transporte executivo.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Ana Costa",
      role: "Empresária",
      content: "Desde o primeiro contato até o destino final, tudo é perfeito. A sensação de segurança e conforto me permite focar no que realmente importa. Simplesmente excepcional!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-luxury-dark via-luxury-charcoal to-luxury-dark">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-1 bg-luxury-gold"></div>
            <span className="text-luxury-gold font-medium tracking-wider uppercase text-sm">Depoimentos</span>
            <div className="w-12 h-1 bg-luxury-gold"></div>
          </div>
          <h2 className="font-luxury text-4xl lg:text-5xl font-bold text-white mb-6">
            O que nossos clientes
            <span className="text-luxury-gold block">falam sobre nós</span>
          </h2>
          <p className="text-xl text-luxury-platinum max-w-3xl mx-auto leading-relaxed">
            A confiança dos nossos clientes é nossa maior conquista. 
            Veja por que somos a escolha preferida dos executivos mais exigentes.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white/5 backdrop-blur-sm border-luxury-gold/20 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-8 h-8 text-luxury-gold opacity-50" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-luxury-gold fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-luxury-platinum leading-relaxed mb-6 text-lg italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-luxury-gold/20"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-luxury-gold text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-8 text-center animate-fade-in">
          <div className="space-y-4">
            <div className="text-4xl font-bold text-luxury-gold">98%</div>
            <p className="text-luxury-platinum">Taxa de Satisfação</p>
          </div>
          <div className="space-y-4">
            <div className="text-4xl font-bold text-luxury-gold">5.0</div>
            <p className="text-luxury-platinum">Avaliação Média</p>
          </div>
          <div className="space-y-4">
            <div className="text-4xl font-bold text-luxury-gold">500+</div>
            <p className="text-luxury-platinum">Clientes VIP</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
