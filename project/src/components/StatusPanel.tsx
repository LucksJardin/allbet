import React from 'react';
import { CheckCircle, AlertTriangle, Clock } from 'lucide-react';

function StatusPanel() {
  // Simulated status data
  const statusData = {
    systemStatus: 'operational',
    successRate: 99.9,
    lastUpdate: '2 minutos atrás',
    services: [
      { name: 'Processamento de Pagamentos', status: 'operational' },
      { name: 'API de Integração', status: 'operational' },
      { name: 'Dashboard do Cliente', status: 'operational' },
      { name: 'Sistema de Notificações', status: 'degraded' },
    ]
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Status das Operações</h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Overall Status */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <h3 className="text-xl font-semibold">Status do Sistema</h3>
              </div>
              <span className="text-sm text-gray-500">
                Última atualização: {statusData.lastUpdate}
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-gray-600 mb-1">Taxa de Sucesso</p>
                <p className="text-2xl font-bold text-green-500">{statusData.successRate}%</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-gray-600 mb-1">Tempo de Resposta</p>
                <p className="text-2xl font-bold text-blue-600">238ms</p>
              </div>
            </div>
          </div>

          {/* Services Status */}
          <div className="space-y-4">
            {statusData.services.map((service, index) => (
              <ServiceStatus
                key={index}
                name={service.name}
                status={service.status}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceStatus({ name, status }) {
  const statusConfig = {
    operational: {
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      text: 'Operacional',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700'
    },
    degraded: {
      icon: <AlertTriangle className="w-5 h-5 text-yellow-500" />,
      text: 'Desempenho Reduzido',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-700'
    },
    down: {
      icon: <Clock className="w-5 h-5 text-red-500" />,
      text: 'Indisponível',
      bgColor: 'bg-red-50',
      textColor: 'text-red-700'
    }
  };

  const config = statusConfig[status];

  return (
    <div className="bg-white border rounded-lg p-4 flex items-center justify-between">
      <span className="font-medium">{name}</span>
      <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${config.bgColor}`}>
        {config.icon}
        <span className={`text-sm font-medium ${config.textColor}`}>
          {config.text}
        </span>
      </div>
    </div>
  );
}

export default StatusPanel;