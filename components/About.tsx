import React, { useState, useEffect } from 'react';

const images = [
  'https://drive.google.com/file/d/1Fkr1US9n8eBUZ3fU3wgCg11PpHAVO5QY/view?usp=sharing',
];

const About: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="sobre" className="min-h-screen bg-white flex flex-col md:flex-row">
      {/* Left Side: Text Content */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12 lg:p-16 order-2 md:order-1">
        <div className="max-w-md">
          <h2 className="text-sm font-bold uppercase text-amber-500 mb-2">Sobre a Berá Engenharia</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Compromisso com a Excelência e a Inovação</h3>
          <p className="text-slate-600 mb-4">
            Fundada em Maringá, a Berá Engenharia nasceu do desejo de transformar ideias em realidade. Somos especialistas em engenharia civil e arquitetura, combinando técnica apurada, materiais de alta qualidade e um design que inspira.
          </p>
          <p className="text-slate-600">
            Nossa missão é entregar projetos que não apenas atendam, mas superem as expectativas de nossos clientes, sempre com foco na sustentabilidade, segurança e pontualidade. Cada linha traçada e cada tijolo assentado reflete nosso compromisso com a perfeição.
          </p>
        </div>
      </div>
      
      {/* Right Side: Image Carousel */}
      <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-screen order-1 md:order-2">
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt="Engineering and architecture work"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute z-10 bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentIndex === index ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;