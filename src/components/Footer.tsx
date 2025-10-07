
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img src="logo.svg" alt="Somi logo" className="h-10 w-auto"></img>
              <span className="font-bold text-2xl text-gray-900 dark:text-white">
                Somi
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
              Comunitat en moviment
            </p>
            {/*
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-somi-600 dark:text-gray-400 dark:hover:text-somi-400">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-somi-600 dark:text-gray-400 dark:hover:text-somi-400">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-somi-600 dark:text-gray-400 dark:hover:text-somi-400">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-somi-600 dark:text-gray-400 dark:hover:text-somi-400">
                <Linkedin size={20} />
              </a>
            </div>
            */}
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Contacte</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:contacte@somi.cat" className="text-gray-600 dark:text-gray-400 hover:text-somi-600 dark:hover:text-somi-400 text-sm">
                  contacte@somi.cat
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Navegació</h3>
            <ul className="space-y-3">
              <li>
                <a href="#inici" className="text-gray-600 dark:text-gray-400 hover:text-somi-600 dark:hover:text-somi-400 text-sm">
                  Inici
                </a>
              </li>
              <li>
                <a href="#serveis" className="text-gray-600 dark:text-gray-400 hover:text-somi-600 dark:hover:text-somi-400 text-sm">
                   Serveis
                </a>
              </li>
              <li>
                <a href="#equip" className="text-gray-600 dark:text-gray-400 hover:text-somi-600 dark:hover:text-somi-400 text-sm">
                  Equip
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Somi. Tots els drets reservats.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-somi-600 dark:hover:text-somi-400 text-sm">
              Política de Privacitat
            </a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-somi-600 dark:hover:text-somi-400 text-sm">
              Termes del Servei
            </a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-somi-600 dark:hover:text-somi-400 text-sm">
              Política de Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
