
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Berá Engenharia. Todos os direitos reservados.</p>
        <p className="text-sm mt-2">Feito com paixão em Maringá, PR.</p>
      </div>
    </footer>
  );
};

export default Footer;
