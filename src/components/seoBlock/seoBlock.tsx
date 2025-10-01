import { useEffect, useRef, useState } from "react";

const metrics = [
      { 
        value: '5000+', 
        label: "Produtos Disponíveis" 
      },
      { 
        value: '50k', 
        label: "Clientes Satisfeitos" 
      },
      { 
        value: '99%', 
        label: "Avaliações Positivas" 
      },
      { 
        value: '24h', 
        label: "Entrega Expressa" 
      },
    ];


export const SeoBlock = () => {
    const [current, setCurrent] = useState(0);
    const intervalRef = useRef<number | null>(null);
    const isMobile = window.innerWidth < 768;

    useEffect(() => {
      if (isMobile) {
        intervalRef.current = window.setInterval(() => {
          setCurrent((prev) => (prev === metrics.length - 1 ? 0 : prev + 1));
        }, 2500);
        return () => {
          if (intervalRef.current) clearInterval(intervalRef.current);
        };
      }
    }, [isMobile]);

   

  return (
    <div className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mt-10 md:text-center">
        <h2 className="text-blue-700 font-bold text-3xl mb-6">GeekStore - Sua Loja de Games e Produtos Geek</h2>
        <span className="text-gray-500 text-lg font-normal">A maior variedade de jogos, consoles e acessórios com os melhores preços do Brasil</span>
      </div>

      <div className="mt-10 md:flex items-center gap-16">
        <div>
          <h3 className="text-blue-700 font-bold text-xl mb-4">Os Melhores Jogos e Consoles</h3>
          <p className="text-gray-500 text-base font-normal mb-4">Na GeekStore você encontra os lançamentos mais aguardados para PlayStation 5, 
            Xbox Series X/S, Nintendo Switch e PC. Nossa seleção inclui desde os blockbusters AAA até indies exclusivos, 
            sempre com garantia oficial e os melhores preços.
          </p>

          <p className="text-gray-500 text-base font-normal mb-4">
            Oferecemos também uma ampla gama de consoles, desde os últimos lançamentos até clássicos retro 
            para colecionadores. Todos os produtos são originais e acompanham garantia do fabricante.
          </p>
        </div>

        <div>
          <h3 className="text-blue-700 font-bold text-xl mb-4">Acessórios e Produtos Geek</h3>
          <p className="text-gray-500 text-base font-normal mb-4">Complete seu setup gamer com nossos acessórios premium: 
            headsets com som surround, controles wireless de última geração, 
            teclados mecânicos, mouses gamers e muito mais. Tudo para elevar sua 
            experiência de jogo ao próximo nível.
          </p>

          <p className="text-gray-500 text-base font-normal mb-4">
           Para os verdadeiros geeks, temos uma seção especial com colecionáveis, action figures, estátuas, livros de 
           arte e merchandise oficial dos seus games favoritos. 
           Produtos únicos para fãs exigentes.
          </p>
        </div>
        </div>
      </div>

      <div className="mt-4 py-10">
        {isMobile ? (
          <div className="overflow-hidden py-6">
            <ul
             className="flex justify-center transition-transform duration-1000"
             style={{ transform: `translateX(-${current * 100}vw)`, width: `${metrics.length * 100}vw` }}
            >
              {metrics.map((metric, idx) => (
                <li key={idx} className="flex items-center justify-center text-center text-sm text-gray-500 w-full m-auto">
                  <div className="text-center flex flex-col justify-center">
                    <p className="text-2xl font-bold text-blue-600">{metric.value}</p>
                    <span className="text-base text-gray-500">{metric.label}</span>
                 </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:py-8">
            <ul className="flex justify-between gap-10">
              {metrics.map((m, idx) => (
                <li key={idx} className="flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">{m.value}</span>
                  <span className="text-base text-gray-500">{m.label}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="bg-gray-600 rounded-lg py-8 px-4 ml-4 mr-4 md:ml-auto md:mr-auto
      mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
        <h3 className="text-blue-700 font-bold text-xl text-center mb-6">
          Por que escolher a GeekStore?
        </h3>
        <div>
          <ul className="flex justify-center flex-col md:flex-row items-center gap-6">
            <li>
              <div className="bg-blue-600 rounded-full w-12 h-12 relative m-auto mb-4">
                 <span className="absolute top-3 left-5 text-white">1</span>
              </div>
              <div className="text-center">
                  <p className="text-blue-700 text-base font-medium">Preços Competitivos</p>
                  <p className="text-gray-500 text-sm mt-2">Trabalhamos com margens reduzidas para oferecer sempre os melhores preços</p>
              </div>
            </li>
            <li>
              <div className="bg-blue-600 rounded-full w-12 h-12 relative m-auto mb-4">
                <span className="absolute top-3 left-5 text-white">2</span>
              </div>
              <div className="text-center">
                  <p className="text-blue-700 text-base font-medium">Entrega Rápida</p>
                  <p className="text-gray-500 text-sm mt-2">Entrega expressa em todo Brasil com frete grátis acima de R$ 199</p>
              </div>
            </li>
            <li>
              <div className="bg-blue-600 rounded-full w-12 h-12 relative m-auto mb-4">
                 <span className="absolute top-3 left-5 text-white">3</span>
              </div>
              <div className="text-center">
                <p className="text-blue-700 text-base font-medium">Suporte Especializado</p>
                <p className="text-gray-500 text-sm mt-2">Nossa equipe é formada por gamers que entendem suas necessidades</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
  </div>
  );
};