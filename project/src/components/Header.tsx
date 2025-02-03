import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-blue-600">
              All Best
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#" text="Início" />
            <NavLink href="#" text="Sobre" />
            <NavLink href="#" text="Serviços" />
            <NavLink href="#" text="Status" />
            <NavLink href="#" text="Contato" />
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col gap-4">
              <MobileNavLink href="#" text="Início" />
              <MobileNavLink href="#" text="Sobre" />
              <MobileNavLink href="#" text="Serviços" />
              <MobileNavLink href="#" text="Status" />
              <MobileNavLink href="#" text="Contato" />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

function NavLink({ href, text }) {
  return (
    <a 
      href={href}
      className="text-gray-600 hover:text-blue-600 transition-colors"
    >
      {text}
    </a>
  );
}

function MobileNavLink({ href, text }) {
  return (
    <a 
      href={href}
      className="text-gray-600 hover:text-blue-600 transition-colors block py-2"
    >
      {text}
    </a>
  );
}

export default Header;