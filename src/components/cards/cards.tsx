type CardProps = {
  id: number | string;
  image: string;
  name: string;
  textSmall: string;
  text: string;
  buttonText?: string;
}

type DataCardProps = {
  cards: CardProps[];
}

export const Cards = ({ cards }:DataCardProps) => {
  if (!cards || cards.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-4 md:gap-8 px-4 md:px-0 left-0 right-0 bottom-0 mt-2 md:mt-0">
      <div className="block md:hidden w-full">
        {cards.map((card) => (
          <div key={card.id} className="mb-4 md:mb-8 relative w-full h-auto">
            <figure>
              <img src={card.image} alt={card.name} className="w-full h-auto" />
            </figure>
            <div className="absolute top-0 left-0 p-6">
              <div className="text-base font-normal text-yellow-500">
                <span>{card.textSmall}</span>
              </div>
              <div className="flex flex-col w-full mt-2">
                <h2 className="text-white font-bold text-3xl">{card.name}</h2>
                <span className="text-white mt-2 text-sm font-normal">{card.text}</span>
              </div>
              <button className="mt-4 bg-yellow-500 rounded-lg text-blue-500 font-medium text-sm py-2 px-4">
                {card.buttonText || 'Ver Consoles'}
              </button>
            </div>
          </div>
        ))}
      </div>
     
      <div className="hidden md:grid grid-cols-3 gap-8 w-full">
        <div className="relative col-span-2 h-auto">
          <figure>
            <img src={cards[0]?.image} alt={cards[0]?.name} className="w-full h-auto" />
          </figure>
          <div className="absolute top-0 left-0 p-6">
            <div className="text-base font-normal text-yellow-500">
              <span>{cards[0]?.textSmall}</span>
            </div>
            <div className="flex flex-col w-full mt-2">
              <h2 className="text-white font-bold text-3xl">{cards[0]?.name}</h2>
              <span className="text-white mt-2 text-sm font-normal">{cards[0]?.text}</span>
            </div>
            <button className="mt-4 bg-yellow-500 rounded-lg text-blue-500 font-medium text-sm py-2 px-4">
              {cards[0]?.buttonText || 'Ver Consoles'}
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {cards.slice(1, 3).map((card) => (
            <div key={card.id} className="relative h-auto">
              <figure>
                <img src={card.image} alt={card.name} className="w-full h-auto" />
              </figure>
              <div className="absolute top-0 left-0 p-6">
                <div className="text-base font-normal text-yellow-500">
                  <span>{card.textSmall}</span>
                </div>
                <div className="flex flex-col w-full mt-2">
                  <h2 className="text-white font-bold text-3xl">{card.name}</h2>
                  <span className="text-white mt-2 text-sm font-normal">{card.text}</span>
                </div>
                <button className="mt-4 bg-yellow-500 rounded-lg text-blue-500 font-medium text-sm py-2 px-4">
                  {card.buttonText || 'Ver Consoles'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}