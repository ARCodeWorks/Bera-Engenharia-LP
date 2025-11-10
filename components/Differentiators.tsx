
import React from 'react';

const BulbIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
);

const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const differentiatorsData = [
  {
    icon: <BulbIcon />,
    title: 'Inovação e Tecnologia',
    description: 'Utilizamos as mais recentes ferramentas de BIM e softwares de gestão para garantir precisão, eficiência e economia em cada projeto.',
  },
  {
    icon: <ShieldIcon />,
    title: 'Transparência Total',
    description: 'Mantemos uma comunicação clara e constante, oferecendo relatórios detalhados e acesso direto à nossa equipe de gerenciamento.',
  },
  {
    icon: <ClockIcon />,
    title: 'Compromisso com Prazos',
    description: 'Nosso planejamento rigoroso e gestão de obras eficiente nos permitem entregar projetos dentro do cronograma, sem surpresas.',
  },
];

const Differentiators: React.FC = () => {
  return (
    <section id="diferenciais" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 text-center pt-[10px]">
        <h2 className="text-sm font-bold uppercase text-amber-500 mb-2">Nossos Diferenciais</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Construindo com Confiança e Qualidade</h3>
        <p className="text-slate-600 max-w-3xl mx-auto mb-12">
            Acreditamos que a excelência em engenharia vai além da construção. É sobre construir relações duradouras baseadas em confiança, integridade e resultados superiores.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {differentiatorsData.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-left transition-transform transform hover:-translate-y-2">
              <div className="mb-4">{item.icon}</div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h4>
              <p className="text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;