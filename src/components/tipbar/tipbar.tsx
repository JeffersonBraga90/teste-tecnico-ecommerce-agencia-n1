import { useEffect, useRef, useState } from "react";

const tips = [
  {
    icon: "/icon-frete-gratis.svg",
    title: "Frete Grátis",
    desc: "Acima de R$ 199"
  },
  {
    icon: "/icon-cartao-credito.svg",
    title: "12x sem Juros",
    desc: "No cartão de crédito"
  },
  {
    icon: "/icon-seguranca.svg",
    title: "Compra Segura",
    desc: "SSL e criptografia"
  },
  {
    icon: "/icon-atendimento.svg",
    title: "Atendimento",
    desc: "Segunda a Sábado"
  }
];

export const TipBar = () => {
  const isMobile = window.innerWidth < 768;
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isMobile) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev === tips.length - 1 ? 0 : prev + 1));
      }, 2500);
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, [isMobile]);

  return (
    <div className="-mt-8 md:-mt-20">
      {isMobile ? (
        <div className="overflow-hidden w-full border-b border-gray-200 py-6">
          <ul
            className="flex transition-transform duration-1000"
            style={{ transform: `translateX(-${current * 100}vw)`, width: `${tips.length * 100}vw` }}
          >
            {tips.map((tip, idx) => (
              <li key={idx} className="flex gap-4 items-center justify-center text-center text-sm text-gray-500 w-full" style={{width: '100vw'}}>
                <img src={tip.icon} alt={tip.title} />
                <div className="text-left">
                  <p className="text-blue-700 font-medium text-base">{tip.title}</p>
                  <span className="text-gray-500 text-sm font-normal">{tip.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="border-b border-gray-200">
          <ul className="flex justify-between items-center text-center 
          text-sm md:text-base text-gray-500
          py-6 gap-4 md:gap-0 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8
          ">
            {tips.map((tip, idx) => (
              <li key={idx} className="flex flex-col items-center justify-center">
                <img src={tip.icon} alt={tip.title} />
                <div>
                  <p className="text-blue-700 font-medium text-base">{tip.title}</p>
                  <span className="text-gray-500 text-sm font-normal">{tip.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}