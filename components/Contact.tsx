
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="min-h-screen bg-slate-50 flex items-center py-20">
      <div className="container mx-auto px-6 pt-[10px]">
        <div className="text-center mb-12">
            <h2 className="text-sm font-bold uppercase text-amber-500 mb-2">Fale Conosco</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800">Vamos Iniciar Seu Projeto?</h3>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                Tem uma ideia ou precisa de uma consultoria? Preencha o formulário abaixo e nossa equipe entrará em contato em breve.
            </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Nome</label>
              <input type="text" id="name" placeholder="Seu Nome" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input type="email" id="email" placeholder="Seu E-mail" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Mensagem</label>
              <textarea id="message" rows={5} placeholder="Sua Mensagem" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-slate-800 text-white font-bold py-3 px-8 rounded-lg hover:bg-slate-900 transition-colors duration-300">
              Enviar Mensagem
            </button>
          </form>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-slate-800 text-lg mb-2">Endereço</h4>
                <p className="text-slate-600">Av. Principal, 1234, Sala 56<br/>Maringá, PR - Brasil</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-slate-800 text-lg mb-2">E-mail</h4>
                <p className="text-slate-600 hover:text-amber-500"><a href="mailto:contato@bera.com.br">contato@bera.com.br</a></p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-slate-800 text-lg mb-2">Telefone</h4>
                <p className="text-slate-600 hover:text-amber-500"><a href="tel:+5544999998888">+55 (44) 99999-8888</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;