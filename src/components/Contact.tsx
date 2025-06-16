
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Solicitação Enviada!",
      description: "Entraremos em contato em até 15 minutos.",
    });
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(11) 99999-9999",
      description: "Disponível 24/7 para emergências"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@executivetransfer.com.br",
      description: "Resposta em até 30 minutos"
    },
    {
      icon: MapPin,
      title: "Localização",
      info: "São Paulo - SP",
      description: "Atendemos toda a Grande São Paulo"
    },
    {
      icon: Clock,
      title: "Horário",
      info: "24h por dia, 7 dias por semana",
      description: "Sempre prontos para atendê-lo"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-1 bg-luxury-gold"></div>
            <span className="text-luxury-gold font-medium tracking-wider uppercase text-sm">Contato</span>
            <div className="w-12 h-1 bg-luxury-gold"></div>
          </div>
          <h2 className="font-luxury text-4xl lg:text-5xl font-bold text-luxury-dark mb-6">
            Reserve seu transfer
            <span className="text-luxury-gold block">premium agora</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Entre em contato conosco e descubra como podemos tornar sua próxima viagem 
            uma experiência inesquecível de luxo e conforto.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="shadow-2xl border-0">
              <CardContent className="p-8">
                <h3 className="font-luxury text-2xl font-bold text-luxury-dark mb-6">
                  Solicite seu Orçamento
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        required
                        className="border-gray-300 focus:border-luxury-gold focus:ring-luxury-gold"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(11) 99999-9999"
                        required
                        className="border-gray-300 focus:border-luxury-gold focus:ring-luxury-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      required
                      className="border-gray-300 focus:border-luxury-gold focus:ring-luxury-gold"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de Serviço
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="transfer-executivo">Transfer Executivo</option>
                      <option value="transfer-aeroporto">Transfer Aeroporto</option>
                      <option value="corporativo">Corporativo</option>
                      <option value="eventos-especiais">Eventos Especiais</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Conte-nos mais sobre suas necessidades..."
                      rows={4}
                      className="border-gray-300 focus:border-luxury-gold focus:ring-luxury-gold"
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-luxury-gold text-luxury-dark hover:bg-luxury-gold-light transition-all duration-300 font-semibold group"
                  >
                    Enviar Solicitação
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-right">
            <div className="mb-8">
              <h3 className="font-luxury text-2xl font-bold text-luxury-dark mb-4">
                Entre em Contato
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Nossa equipe está sempre disponível para atendê-lo com a excelência 
                que você merece. Entre em contato através dos canais abaixo.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-luxury-gold"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-luxury-gold" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-luxury-dark mb-1">
                          {info.title}
                        </h4>
                        <p className="text-luxury-gold font-medium mb-1">
                          {info.info}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-luxury-dark to-luxury-charcoal rounded-2xl p-8 text-center">
              <h4 className="font-luxury text-2xl font-bold text-white mb-4">
                Precisa de Atendimento Urgente?
              </h4>
              <p className="text-luxury-platinum mb-6">
                Nossa linha direta está disponível 24/7 para emergências
              </p>
              <Button 
                size="lg"
                className="bg-luxury-gold text-luxury-dark hover:bg-luxury-gold-light transition-all duration-300 font-semibold"
              >
                Ligar Agora: (11) 99999-9999
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
