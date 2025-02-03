import React from 'react';
import { ArrowRight, Shield, Zap, BarChart3, Clock, MessageSquare, MapIcon as WhatsappIcon } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import StatusPanel from './components/StatusPanel';

function App() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511974081388', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:admin@allbets-br.com';
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80"
            alt="Financial Technology"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-bold mb-6">
              Processamento de pagamentos de alto volume com máxima eficiência
            </h1>
            <p className="text-xl mb-8">
              Facilitamos pagamentos em larga escala com agilidade e segurança
            </p>
            <button 
              onClick={handleWhatsAppClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center gap-2 text-lg font-semibold transition-colors"
            >
              Comece Agora <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Zap className="w-8 h-8 text-blue-600" />}
              title="Cash-In & Cash-Out"
              description="Processamento especializado para grandes volumes com alta performance e segurança"
            />
            <ServiceCard 
              icon={<BarChart3 className="w-8 h-8 text-blue-600" />}
              title="Monitoramento em Tempo Real"
              description="Acompanhe todas as suas transações com atualizações instantâneas"
            />
            <ServiceCard 
              icon={<Shield className="w-8 h-8 text-blue-600" />}
              title="Gestão de Fluxo Financeiro"
              description="Otimize suas operações com nossa plataforma integrada"
            />
          </div>
        </div>
      </section>

      {/* Status Panel */}
      <StatusPanel />

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Entre em Contato</h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <ContactCard 
                icon={<WhatsappIcon className="w-6 h-6 text-green-500" />}
                title="WhatsApp"
                description="Suporte imediato"
                action="Iniciar conversa"
                onClick={handleWhatsAppClick}
              />
              <ContactCard 
                icon={<MessageSquare className="w-6 h-6 text-blue-500" />}
                title="E-mail"
                description="Questões administrativas"
                action="Enviar mensagem"
                onClick={handleEmailClick}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ContactCard({ icon, title, description, action, onClick }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow border hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <button 
        onClick={onClick}
        className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
      >
        {action} →
      </button>
    </div>
  );
}

export default App;