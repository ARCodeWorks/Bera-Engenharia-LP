
import React, { useState } from 'react';

const faqData = [
  {
    question: 'Quais tipos de projetos a Berá Engenharia realiza?',
    answer: 'Somos especializados em projetos residenciais, comerciais e industriais. Oferecemos soluções completas, desde o projeto arquitetônico e estrutural até o gerenciamento e execução da obra.',
  },
  {
    question: 'Como posso solicitar um orçamento?',
    answer: 'É simples! Você pode preencher o formulário de contato em nosso site, nos enviar um e-mail para contato@bera.com.br ou ligar para o nosso telefone. Nossa equipe comercial entrará em contato para entender suas necessidades.',
  },
  {
    question: 'A Berá atende apenas em Maringá?',
    answer: 'Nossa sede é em Maringá, mas temos flexibilidade para atender projetos em toda a região e em outros estados, dependendo da escala e do escopo do empreendimento. Entre em contato para avaliarmos seu caso.',
  },
  {
    question: 'Qual o diferencial da Berá no gerenciamento de obras?',
    answer: 'Nosso diferencial está na combinação de tecnologia, com o uso de softwares BIM, transparência total com o cliente através de relatórios periódicos, e um compromisso rigoroso com os prazos e a qualidade dos materiais.',
  },
  {
    question: 'Vocês trabalham com projetos sustentáveis ou "green building"?',
    answer: 'Sim! A sustentabilidade é um pilar da Berá. Integramos soluções como aproveitamento de água da chuva, energia solar, materiais de baixo impacto ambiental e design bioclimático para criar projetos mais eficientes e ecológicos.',
  },
  {
    question: 'Como é o processo de colaboração com o cliente durante a fase de projeto?',
    answer: 'Acreditamos na co-criação. O processo envolve reuniões de briefing, apresentação de estudos preliminares, desenvolvimento de modelos 3D e total abertura para ajustes, garantindo que o resultado final seja um reflexo fiel dos seus desejos e necessidades.',
  },
  {
    question: 'Qual a garantia oferecida nos serviços de construção?',
    answer: 'Oferecemos todas as garantias exigidas por lei e pelas normas técnicas brasileiras, incluindo a garantia de 5 anos para a solidez e segurança da obra. Nosso compromisso é com a qualidade e a sua tranquilidade a longo prazo.',
  },
];

const FaqItem: React.FC<{ item: typeof faqData[0]; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-200">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-5 px-1 focus:outline-none"
        aria-expanded={isOpen}
      >
        <h4 className="text-lg font-medium text-slate-800">{item.question}</h4>
        <svg
          className={`w-5 h-5 text-amber-500 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="pb-5 pr-4 text-slate-600">
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="min-h-screen bg-white flex items-center py-20">
      <div className="container mx-auto px-6 pt-[10px]">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold uppercase text-amber-500 mb-2">Tire suas Dúvidas</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-800">Perguntas Frequentes</h3>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;