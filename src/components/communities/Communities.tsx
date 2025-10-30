
import React, { useEffect } from 'react';
import { Users, ArrowRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Communities = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const communities = [
    {
      name: 'Veïns de la Riera',
      members: 142,
      rides: 35,
      color: 'bg-somi-100',
      textColor: 'text-somi-800',
      iconColor: 'text-somi-600',
      borderColor: 'border-somi-200'
    },
    {
      name: 'Viatgers Tech Park',
      members: 76,
      rides: 28,
      color: 'bg-blue-100',
      textColor: 'text-blue-800',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-200'
    },
    {
      name: 'Treballadors del Centre',
      members: 98,
      rides: 42,
      color: 'bg-green-100',
      textColor: 'text-green-800',
      iconColor: 'text-green-600',
      borderColor: 'border-green-200'
    },
    {
      name: 'Estudiants Universitaris',
      members: 215,
      rides: 68,
      color: 'bg-purple-100',
      textColor: 'text-purple-800',
      iconColor: 'text-purple-600',
      borderColor: 'border-purple-200'
    }
  ];

  return (
    <section id="communities" className="page-section py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-somi-100 text-somi-800 mb-4">
            <span className="flex h-2 w-2 rounded-full bg-somi-500 mr-2"></span>
            Comunitats
          </div>
          <h2 className="heading-lg text-gray-900 dark:text-white mb-4">
            Uneix-te a <span className="text-gradient">comunitats de confiança</span> o crea la teva pròpia
          </h2>
          <p className="body-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Les comunitats són el cor de Somi. Proporcionen un entorn segur i de confiança
            per organitzar viatges compartits amb persones que coneixes o amb les que comparteixes interessos comuns.
          </p>
        </div>

        <div className="relative mb-16 animate-on-scroll">
          <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900 rounded-3xl transform rotate-1 scale-[1.03] opacity-70"></div>
          <div className="relative glass-card dark:glass-card-dark rounded-3xl p-6 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              <div className="lg:col-span-2">
                <h3 className="heading-md text-gray-900 dark:text-white mb-4">Crea una nova comunitat</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Comença la teva pròpia comunitat de cotxe compartit pel teu barri, lloc de treball, escola
                  o qualsevol grup amb necessitats de transport compartides.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="h-6 w-6 rounded-full bg-somi-100 text-somi-700 flex items-center justify-center mt-0.5">
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Anomena la teva comunitat</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Dona-li un nom clar i descriptiu</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="h-6 w-6 rounded-full bg-somi-100 text-somi-700 flex items-center justify-center mt-0.5">
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Configura les opcions de privacitat</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Pública o privada amb accés només per invitació</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="h-6 w-6 rounded-full bg-somi-100 text-somi-700 flex items-center justify-center mt-0.5">
                      <span className="text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Convida membres</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Comparteix amb amics, veïns o col·legues</p>
                    </div>
                  </div>
                </div>
                <Button className="mt-8 rounded-full bg-somi-500 hover:bg-somi-600 px-8 py-6">
                  Crear Comunitat
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="lg:col-span-3">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="space-y-4">
                    {communities.map((community, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-4 p-4 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 transition-colors"
                      >
                        <div className={`h-12 w-12 rounded-full ${community.color} flex items-center justify-center`}>
                          <Users className={`h-6 w-6 ${community.iconColor}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 dark:text-white">{community.name}</h4>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <span>{community.members} membres</span>
                            <span className="mx-2">•</span>
                            <span>{community.rides} viatges actius</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <Button variant="link" className="text-somi-600 dark:text-somi-400">
                      Veure totes les comunitats
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Communities;
