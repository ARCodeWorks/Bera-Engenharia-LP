import React, { useState } from 'react';

// Icons from former Services.tsx
const PlanIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 16.382V5.618a1 1 0 00-1.447-.894L15 7m-6 10l6-3m0 0l6-3m-6 3V7" />
  </svg>
);

const BuildingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const RulerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

// Data from former Services.tsx
const servicesData = [
  {
    icon: <PlanIcon />,
    title: 'Projetos Arquitetônicos',
    description: 'Criamos projetos únicos e funcionais que harmonizam estética e técnica.',
  },
  {
    icon: <BuildingIcon />,
    title: 'Gerenciamento de Obras',
    description: 'Coordenamos todas as etapas, garantindo prazos, orçamentos e qualidade.',
  },
  {
    icon: <RulerIcon />,
    title: 'Design de Interiores',
    description: 'Desenvolvemos ambientes que refletem personalidade, unindo conforto e beleza.',
  },
];

// Data from former Portfolio.tsx
const projects = [
  {
    image: 'https://picsum.photos/seed/arch-proj1/800/1200',
    title: 'Residência Contemporânea',
    category: 'Arquitetura Residencial',
  },
  {
    image: 'https://picsum.photos/seed/arch-proj2/800/1200',
    title: 'Edifício Comercial SkyTower',
    category: 'Engenharia Estrutural',
  },
  {
    image: 'https://picsum.photos/seed/arch-proj3/800/1200',
    title: 'Design de Interiores - Loft Urbano',
    category: 'Design de Interiores',
  },
  {
    image: 'https://picsum.photos/seed/arch-proj4/800/1200',
    title: 'Complexo Industrial Inovatec',
    category: 'Gerenciamento de Obras',
  },
];

const Features: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const handleNext = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const activeProject = projects[currentProject];

  return (
    <section id="destaques" className="grid md:grid-cols-2">
      {/* Left Side: Services */}
      <div className="bg-slate-50 flex flex-col justify-center p-8 md:p-12 lg:p-16 order-2 md:order-1 min-h-[60vh] md:min-h-screen">
        <div className="max-w-md w-full mx-auto">
            <h2 className="text-sm font-bold uppercase text-amber-500 mb-2">Nossos Serviços</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">Soluções Completas em Engenharia</h3>
            <div className="space-y-8">
              {servicesData.map((service, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-5 mt-1 bg-amber-100 p-3 rounded-full">{service.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-1">{service.title}</h4>
                    <p className="text-slate-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>

      {/* Right Side: Projects Carousel */}
      <div className="relative min-h-[60vh] md:min-h-screen bg-slate-900 order-1 md:order-2">
         <div className="absolute inset-0 w-full h-full" key={currentProject}>
            <img 
              src={activeProject.image} 
              alt={activeProject.title} 
              className="w-full h-full object-cover animate-fade-in" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
         </div>

        <div className="relative z-10 flex flex-col justify-between h-full p-8 md:p-12 text-white">
            <div>{/* Spacer */}</div>
            <div>
                <div className="mb-8">
                    <p className="text-sm text-amber-400 font-semibold uppercase tracking-wider">{activeProject.category}</p>
                    <h4 className="text-3xl lg:text-4xl font-bold text-shadow">{activeProject.title}</h4>
                </div>

                <div className="flex items-center space-x-4">
                    <button onClick={handlePrev} aria-label="Previous project" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-amber-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button onClick={handleNext} aria-label="Next project" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-amber-500">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                           <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                       </svg>
                    </button>
                    <div className="text-sm font-mono">
                        <span>{String(currentProject + 1).padStart(2, '0')}</span>
                        <span className="text-white/50"> / {String(projects.length).padStart(2, '0')}</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Features;