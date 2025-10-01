import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useState } from "react";
import { Counter } from "../counter";

type ShelfProps = {
  id: number | string;
  imageShelf: string;
  textShelf: string;
  price: string;
  flagPorcentage?: string;
  flagPromotion?: string;
  listPrice?: string;
}

type DataShelfProps = {
  shelf: ShelfProps[];
}

export const Shelf = ({ shelf }: DataShelfProps) => {
  const { addToCart } = useCart();
  const [current, setCurrent] = useState(0);
  const isMobile = window.innerWidth < 768;

  return (
    <div className="flex flex-col block bg-white rounded-lg py-6 ml-4 mr-4
    mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:m-auto">
      <div className="text-center mb-10 px-2">
        <h2 className="text-blue-700 font-bold text-2xl md:text-3xl pb-4">Produtos em Destaque</h2>
        <p className="text-gray-500 md:text-lg font-normal">Os melhores jogos e acessórios selecionados especialmente para você</p>
      </div>

      <Counter />

      {isMobile ? (
        <div className="relative w-full flex flex-col items-center">
          <div className="w-full flex justify-center">
            <button
              className="absolute -left-2 top-1/2 -translate-y-1/2 text-black p-2 z-10"
              onClick={() => setCurrent((prev) => (prev === 0 ? shelf.length - 1 : prev - 1))}
              aria-label="Anterior"
            >
              <ChevronLeft size={30} className="text-black-500"/>
            </button>
            <div className="overflow-hidden w-full max-w-3xs">
              <div
                  className="flex transition-transform duration-500"
                  style={{ transform: `translateX(-${current * (100 / shelf.length)}%)`, width: `${shelf.length * 100}%` }}
              >
                {shelf.map((item) => (
                  <div key={item.id} className="flex flex-col border-2 border-gray-100 rounded-lg w-full max-w-3xs" >
                    <figure className="relative">
                      <span className="bg-red-500 rounded-lg 
                      px-2 py-1 text-xs text-white font-medium
                        absolute top-4 left-4
                      ">{item.flagPorcentage}</span>
                      <img src={item.imageShelf} alt={item.textShelf} className="w-full rounded-t-lg" />
                    </figure>
                    <div className="px-4 py-4">
                      <span className="bg-yellow-500 rounded-lg text-blue-500 font-medium text-xs px-2 py-1">{item.flagPromotion}</span>
                      <h3 className="mt-4 text-blue-700 font-medium text-base">{item.textShelf}</h3>
                      <div className="flex items-center gap-2 py-2">
                        <img src="/icon-star.svg" alt="Icone estrela" />
                        <img src="/icon-star.svg" alt="Icone estrela" />
                        <img src="/icon-star.svg" alt="Icone estrela" />
                        <img src="/icon-star.svg" alt="Icone estrela" />
                        <img src="/icon-star-empty.svg" alt="Icone estrela" />
                        <span className="text-gray-500 text-sm">(892)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-lg text-blue-500">R$ {item.price}</p>
                        <small className="text-gray-500 text-sm font-normal line-through ">{item.listPrice}</small> 
                      </div>
                      <button
                        className="flex items-center justify-center w-full bg-blue-500 text-white rounded-lg px-8 py-2 
                        font-medium text-sm text-center cursor-pointer mt-4"
                        onClick={() => addToCart({
                          id: item.id,
                          name: item.textShelf,
                          image: item.imageShelf,
                          price: item.price,
                          listPrice: item.listPrice,
                          flagPorcentage: item.flagPorcentage,
                          flagPromotion: item.flagPromotion
                        })}
                      >
                        <ShoppingCart size={16} className="mr-2" />
                        Adicionar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              className="absolute -right-2 top-1/2 -translate-y-1/2 text-black p-2 z-10"
              onClick={() => setCurrent((prev) => (prev === shelf.length - 1 ? 0 : prev + 1))}
              aria-label="Próximo"
            >
              <ChevronRight size={30} className="text-black-500" />
            </button>
          </div>
          <div className="flex justify-center items-center gap-2 mt-2">
            {shelf.map((_, idx) => (
              <span
                key={idx}
                className={
                  `w-3 h-3 rounded-full transition-all duration-300 ` +
                  (idx === current ? 'bg-yellow-500' : 'bg-white-100 border border-gray-200')
                }
                style={{ display: 'inline-block' }}
              />
            ))}
          </div>
       </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-4 md:px-0 ">
          {shelf.map((item) => (
                  <div key={item.id} className="flex flex-col border-2 border-gray-100 rounded-lg w-full max-w-3xs" >
                    <figure className="relative">
                      <span className="bg-red-500 rounded-lg 
                      px-2 py-1 text-xs text-white font-medium
                        absolute top-4 left-4
                      ">{item.flagPorcentage}</span>
                      <img src={item.imageShelf} alt={item.textShelf} className="w-full rounded-t-lg" />
                    </figure>
                    <div className="px-4 py-4">
                      <span className="bg-yellow-500 rounded-lg text-blue-500 font-medium text-xs px-2 py-1">{item.flagPromotion}</span>
                      <h3 className="mt-4 text-blue-700 font-medium text-base">{item.textShelf}</h3>
                      <div className="flex items-center gap-2 py-2">
                        <img src="/icon-star.svg" alt="Icone estrela" />
                        <img src="/icon-star.svg" alt="Icone estrela" />
                        <img src="/icon-star.svg" alt="Icone estrela" />
                        <img src="/icon-star.svg" alt="Icone estrela" />
                        <img src="/icon-star-empty.svg" alt="Icone estrela" />
                        <span className="text-gray-500 text-sm">(892)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-lg text-blue-500">R$ {item.price}</p>
                        <small className="text-gray-500 text-sm font-normal line-through ">{item.listPrice}</small> 
                      </div>
                      <button
                        className="flex items-center justify-center w-full bg-blue-500 text-white rounded-lg px-8 py-2 
                        font-medium text-sm text-center cursor-pointer mt-4"
                        onClick={() => addToCart({
                          id: item.id,
                          name: item.textShelf,
                          image: item.imageShelf,
                          price: item.price,
                          listPrice: item.listPrice,
                          flagPorcentage: item.flagPorcentage,
                          flagPromotion: item.flagPromotion
                        })}
                      >
                        <ShoppingCart size={16} className="mr-2" />
                        Adicionar
                      </button>
                    </div>
                  </div>
                ))}
        </div>
      )}

      <button className="text-blue-500 border border-blue-500 rounded-lg
      font-medium text-sm py-2 px-4 mt-6 self-center mb-2 md:mt-12 bg-gray-800
      cursor-pointer">Ver Todos os Produtos</button>
    </div>
  );
}