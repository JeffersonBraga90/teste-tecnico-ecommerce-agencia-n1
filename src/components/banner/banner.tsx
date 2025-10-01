import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type BannerProps = {
  image: string;
  name: string;
  textSmall: string;
  text: string;
};

type BannerSliderProps = {
  banners: BannerProps[];
};

export const Banner = ({ banners }: BannerSliderProps) => {
  const [current, setCurrent] = useState(0);
  const total = banners.length;
  const banner = banners[current];
  const isMobile = window.innerWidth < 768;
  
  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className={`relative bg-cover bg-no-repeat w-full h-[460px] md:h-[760px] ${isMobile ? 'bg-center' : 'md:bg-center'}`}
      style={{
        backgroundImage: `url(${banner.image})`
      }}
    >
      <div className="flex absolute top-50 md:left-1/2 md:-translate-y-1/2 md:right-0">
        <button onClick={handlePrev} aria-label="Anterior">
            <ChevronLeft size={30} className="text-white" />
        </button>
        <div
          /* className="flex px-6 py-6 md:px-0 md:py-0 flex-col gap-2 md:gap-5 w-full 
          md:w-90 text-left" */
        >
          <div className="text-base md:text-4xl font-normal text-yellow-500">
            <h1>{banner.textSmall}</h1>
          </div>
          <div className="w-full md:w-90">
            <span className="text-white font-bold text-4xl md:text-5xl">
             {banner.name}
            </span>
            <p className="text-white mt-2 md:mt-5 md:text-xl font-normal">{banner.text}</p>
            <button className="mt-4 bg-yellow-500 rounded-lg text-blue-500 font-medium text-sm py-2 px-4">Ver Consoles</button>
          </div>
        </div>
        <button onClick={handleNext} aria-label="Próximo">
          <ChevronRight size={30} className="text-white"/>
        </button>
      </div>
      <div className="flex justify-center items-center gap-2 mt-2 absolute bottom-4 left-0 right-0">
          {banners.map((_, idx) => (
              <span
                key={idx}
                className={
                  `w-3 h-3 rounded-full transition-all duration-300 ` +
                  (idx === current ? 'bg-yellow-500' : 'bg-white-100 border border-transparent')
                }
                style={{ display: 'inline-block' }}
              />
            ))}
      </div>
    </div>
  );
};