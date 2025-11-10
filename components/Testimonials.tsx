
import React from 'react';

const testimonials = [
  {
    quote: "A equipe da Berá transformou nosso sonho em um lar. Profissionalismo e atenção aos detalhes do início ao fim do projeto.",
    name: "Ana e João Silva",
    project: "Residência em Maringá",
  },
  {
    quote: "O gerenciamento da obra foi impecável. Entregaram antes do prazo e com uma qualidade que superou todas as nossas expectativas.",
    name: "Carlos Pereira",
    project: "Diretor, Empresa XYZ",
  },
  {
    quote: "O design de interiores ficou incrível! Conseguiram captar exatamente o que queríamos, criando um ambiente moderno e acolhedor.",
    name: "Mariana Costa",
    project: "Apartamento Decorado",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-sm font-bold uppercase text-amber-400 mb-2">Depoimentos</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-12">O Que Nossos Clientes Dizem</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-700 p-8 rounded-lg text-left flex flex-col">
              <p className="text-slate-300 italic mb-6 flex-grow">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-amber-400">{testimonial.project}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
