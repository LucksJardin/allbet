import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">All Bet</h3>
            <p className="text-gray-400">
              Soluções em pagamentos para grandes volumes com segurança e eficiência.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <FooterLink href="#" text="Sobre Nós" />
              <FooterLink href="#" text="Serviços" />
              <FooterLink href="#" text="Status" />
              <FooterLink href="#" text="Contato" />
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <FooterLink href="#" text="Termos de Uso" />
              <FooterLink href="#" text="Política de Privacidade" />
              <FooterLink href="#" text="Compliance" />
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>admin@allbets-br.comr</li>
              <li>+55 (11) 97408-1388</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} All Bet. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, text }) {
  return (
    <li>
      <a 
        href={href}
        className="text-gray-400 hover:text-white transition-colors"
      >
        {text}
      </a>
    </li>
  );
}

export default Footer;