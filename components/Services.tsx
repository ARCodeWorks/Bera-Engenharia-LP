
import React from 'react';

const PlanIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 16.382V5.618a1 1 0 00-1.447-.894L15 7m-6 10l6-3m0 0l6-3m-6 3V7" />
  </svg>
);

const BuildingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const RulerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const servicesData = [
  {
    icon: <PlanIcon />,
    title: 'Projetos Arquitetônicos',
    description: 'Criamos projetos únicos e funcionais que harmonizam estética e técnica, otimizando espaços e recursos.',
  },
  {
    icon: <BuildingIcon />,
    title: 'Gerenciamento de Obras',
    description: 'Coordenamos todas as etapas da construção, garantindo o cumprimento de prazos, orçamentos e padrões de qualidade.',
  },
  {
    icon: <RulerIcon />,
    title: 'Design de Interiores',
    description: 'Desenvolvemos ambientes internos que refletem a personalidade do cliente, aliando conforto, beleza e praticidade.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 text-center pt-[10px]">
        <h2 className="text-sm font-bold uppercase text-amber-500 mb-2">Nossos Serviços</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12">Soluções Completas em Engenharia</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-left transition-transform transform hover:-translate-y-2">
              <div className="mb-4">{service.icon}</div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">{service.title}</h4>
              <p className="text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;