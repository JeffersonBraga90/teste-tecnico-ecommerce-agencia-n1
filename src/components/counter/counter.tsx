import React from "react";
export const Counter = () => {
  const BLACK_FRIDAY_DATE = new Date("2025-11-28T00:00:00").getTime();

  function getTimeRemaining(target: number) {
    const now = new Date().getTime();
    const total = target - now;
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return { total, days, hours, minutes, seconds };
  }

  const [time, setTime] = React.useState(getTimeRemaining(BLACK_FRIDAY_DATE));

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTimeRemaining(BLACK_FRIDAY_DATE));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (time.total <= 0) {
    return <div className="text-center text-3xl font-bold text-red-600">Black Friday começou!</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center 
    gap-2 p-4 bg-blue-500 rounded-lg text-white mb-8">
      <span className="font-bold text-2xl md:text-3xl">Esquenta Black Friday</span>
      <span className="mb-6 text-base md:text-lg text-white-200">Preços baixos como você nunca viu.</span>
      <div className="flex gap-2 md:gap-4 text-center">
        <div className="rounded-lg w-14 h-14 md:w-20 md:h-20 text-blue-500 bg-yellow-500 pt-2 md:pt-4">
          <span className="text-xl md:text-3xl font-bold">{time.days}</span>
          <div className="text-xs">dias</div>
        </div>
        <span className="text-4xl"></span>
        <div className="rounded-lg w-14 h-14 md:w-20 md:h-20 text-blue-500 bg-yellow-500 pt-2 md:pt-4">
          <span className="text-xl md:text-3xl font-bold">{time.hours}</span>
          <div className="text-xs">horas</div>
        </div>
        <span className="text-yellow-500 pt-2 md:pt-4 text-4xl">:</span>
        <div className="rounded-lg w-14 h-14 md:w-20 md:h-20 text-blue-500 bg-yellow-500 pt-2 md:pt-4">
          <span className="text-xl md:text-3xl font-bold">{time.minutes}</span>
          <div className="text-xs">minutos</div>
        </div>
        <span className=" text-yellow-500 pt-2 md:pt-4 text-4xl">:</span>
        <div className="rounded-lg w-14 h-14 md:w-20 md:h-20 text-blue-500 bg-yellow-500 pt-2 md:pt-4">
          <span className="text-xl md:text-3xl font-bold">{time.seconds}</span>
          <div className="text-xs">segundos</div>
        </div>
      </div>
    </div>
  );
}