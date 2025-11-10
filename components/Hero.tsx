import React, { useState, useEffect } from 'react';

const images = [
  'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white">
      {/* Image Carousel */}
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt="Modern Architecture"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 pt-[10px]">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-shadow">
          Construindo o Futuro com Precisão e Arte
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-shadow">
          Berá Engenharia: Inovação e excelência em cada projeto, do conceito à conclusão.
        </p>
        <a
          href="#contato"
          className="bg-amber-500 text-white font-bold py-3 px-8 rounded-full hover:bg-amber-600 transition-all duration-300 transform hover:scale-105"
        >
          Solicite um Orçamento
        </a>
      </div>

      {/* Navigation Dots */}
      <div className="absolute z-20 bottom-10 left-1/2 -translate-x-1/2 flex space-x-3">
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
    </section>
  );
};

export default Hero;
