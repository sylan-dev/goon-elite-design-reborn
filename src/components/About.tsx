
import { Button } from '@/components/ui/button';
import { Award, Users, Car, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Clientes Satisfeitos" },
    { icon: Car, value: "50+", label: "Veículos Premium" },
    { icon: Clock, value: "24/7", label: "Atendimento" },
    { icon: Award, value: "10+", label: "Anos de Experiência" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-1 bg-luxury-gold"></div>
                <span className="text-luxury-gold font-medium tracking-wider uppercase text-sm">Sobre Nós</span>
              </div>
              
              <h2 className="font-luxury text-4xl lg:text-5xl font-bold text-luxury-dark leading-tight">
                Redefinindo o
                <span className="text-luxury-gold block">Transporte Executivo</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Há mais de uma década, estabelecemos novos padrões em transporte executivo, 
                combinando luxo, tecnologia e excelência no atendimento.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="w-6 h-6 text-luxury-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-luxury-dark mb-2">Excelência Reconhecida</h3>
                  <p className="text-gray-600">
                    Premiados como a melhor empresa de transfer executivo da região, 
                    com avaliação média de 5 estrelas.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-6 h-6 text-luxury-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-luxury-dark mb-2">Equipe Especializada</h3>
                  <p className="text-gray-600">
                    Motoristas rigorosamente selecionados e treinados, com conhecimento 
                    profundo da região e compromisso com a pontualidade.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Car className="w-6 h-6 text-luxury-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-luxury-dark mb-2">Frota Premium</h3>
                  <p className="text-gray-600">
                    Veículos de última geração, constantemente renovados e mantidos 
                    nos mais altos padrões de conforto e segurança.
                  </p>
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-luxury-gold text-luxury-dark hover:bg-luxury-gold-light transition-all duration-300 font-semibold"
            >
              Conheça Nossa História
            </Button>
          </div>

          {/* Image & Stats */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern office setup representing technology and professionalism"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/30 to-transparent rounded-2xl"></div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 shadow-lg text-center animate-scale-in hover:shadow-2xl transition-shadow duration-300"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className="w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-luxury-gold" />
                  </div>
                  <div className="font-bold text-2xl text-luxury-dark mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
