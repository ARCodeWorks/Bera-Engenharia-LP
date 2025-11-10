
import React from 'react';

const projects = [
  {
    image: 'https://picsum.photos/seed/arch-proj1/500/400',
    title: 'Residência Contemporânea',
    category: 'Arquitetura Residencial',
  },
  {
    image: 'https://picsum.photos/seed/arch-proj2/500/400',
    title: 'Edifício Comercial SkyTower',
    category: 'Engenharia Estrutural',
  },
  {
    image: 'https://picsum.photos/seed/arch-proj3/500/400',
    title: 'Design de Interiores - Loft Urbano',
    category: 'Design de Interiores',
  },
  {
    image: 'https://picsum.photos/seed/arch-proj4/500/400',
    title: 'Complexo Industrial Inovatec',
    category: 'Gerenciamento de Obras',
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="projetos" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center pt-[10px]">
        <h2 className="text-sm font-bold uppercase text-amber-500 mb-2">Portfolio</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12">Projetos em Destaque</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-left">
                <p className="text-sm text-amber-400 font-semibold">{project.category}</p>
                <h4 className="text-xl font-bold text-white">{project.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;