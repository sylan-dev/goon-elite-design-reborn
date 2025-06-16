
import { Card, CardContent } from '@/components/ui/card';
import { Car, Plane, Building, Users, Shield, Clock, Star, Wifi } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Transfer Executivo",
      description: "Transporte premium para executivos e empresários com veículos de luxo e motoristas especializados.",
      features: ["Veículos Premium", "Motorista Profissional", "Pontualidade Garantida", "Água e Wi-Fi Grátis"]
    },
    {
      icon: Plane,
      title: "Transfer Aeroporto",
      description: "Conexão direta e confortável entre aeroportos e seu destino, com monitoramento de voos em tempo real.",
      features: ["Monitoramento de Voos", "Meet & Greet", "Salas VIP", "Bagageiro Incluso"]
    },
    {
      icon: Building,
      title: "Corporativo",
      description: "Soluções completas de transporte para empresas, eventos corporativos e reuniões de negócios.",
      features: ["Contratos Empresariais", "Relatórios Mensais", "Múltiplos Destinos", "Desconto Progressivo"]
    },
    {
      icon: Users,
      title: "Eventos Especiais",
      description: "Transporte VIP para casamentos, formaturas, eventos sociais e ocasiões especiais.",
      features: ["Carros Decorados", "Múltiplas Paradas", "Fotógrafo Opcional", "Champagne Cortesia"]
    }
  ];

  const features = [
    { icon: Shield, title: "Segurança Máxima", description: "Motoristas verificados e veículos inspecionados" },
    { icon: Clock, title: "Pontualidade", description: "Compromisso com horários e prazos" },
    { icon: Star, title: "Excelência", description: "Padrão 5 estrelas em todos os serviços" },
    { icon: Wifi, title: "Comodidades", description: "Wi-Fi, água, carregadores e mais" }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-1 bg-luxury-gold"></div>
            <span className="text-luxury-gold font-medium tracking-wider uppercase text-sm">Nossos Serviços</span>
            <div className="w-12 h-1 bg-luxury-gold"></div>
          </div>
          <h2 className="font-luxury text-4xl lg:text-5xl font-bold text-luxury-dark mb-6">
            Experiência Premium em
            <span className="text-luxury-gold block">Cada Viagem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma gama completa de serviços de transporte executivo, 
            sempre com o mais alto padrão de qualidade, conforto e segurança.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-luxury-gold/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-luxury-gold" />
                </div>
                <h3 className="font-semibold text-xl text-luxury-dark mb-4 group-hover:text-luxury-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="bg-gradient-to-r from-luxury-dark to-luxury-charcoal rounded-3xl p-12 animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="font-luxury text-3xl lg:text-4xl font-bold text-white mb-4">
              Por que escolher a Executive Transfer?
            </h3>
            <p className="text-luxury-platinum text-lg max-w-2xl mx-auto">
              Mais de 10 anos de experiência oferecendo o melhor em transporte executivo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-luxury-gold/20 transition-all duration-300 group-hover:scale-110">
                  <feature.icon className="w-8 h-8 text-luxury-gold" />
                </div>
                <h4 className="font-semibold text-xl text-white mb-2">{feature.title}</h4>
                <p className="text-luxury-platinum">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
