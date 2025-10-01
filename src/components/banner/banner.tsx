import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type BannerProps = {
  image: string;
  name: string;
  textSmall: string;
  text: string;
  buttonText: string;
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
      className={`relative bg-cover bg-no-repeat w-full h-[460px] md:h-[760px] mt-20 md:mt-46 ${isMobile ? 'bg-center' : 'md:bg-center'}`}
      style={{
        backgroundImage: `url(${banner.image})`
      }}
    >
  <div className="flex mt-36 md:mt-70 md:w-full md:justify-center md:items-center
  mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <button onClick={handlePrev} aria-label="Anterior" className="cursor-pointer">
            <ChevronLeft size={30} className="text-white" />
        </button>
        <div className="md:w-full md:px-6">
          <div className="text-base font-normal text-yellow-500 mb-4">
            <h1>{banner.textSmall}</h1>
          </div>
          <div className="w-full">
            <span className="text-white font-bold text-4xl md:text-5xl">
             {banner.name}
            </span>
            <p className="text-white mt-2 md:mt-5 md:text-xl font-normal">{banner.text}</p>
            <button className="mt-4 bg-yellow-500 rounded-lg text-blue-500 
            font-medium text-sm py-2 px-4 cursor-pointer md:mt-8">{banner.buttonText}</button>
          </div>
        </div>
        <button onClick={handleNext} aria-label="Próximo" className="cursor-pointer">
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