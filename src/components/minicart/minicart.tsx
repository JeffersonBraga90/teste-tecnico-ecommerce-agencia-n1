import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { ShoppingCart } from "lucide-react"
import { Trash2 } from "lucide-react";

export const Minicart = () => {
  const { cartItems } = useCart();
  const [open, setOpen] = useState(true);

  if (!open) return null;

  const isMobile = window.innerWidth <= 768;

  const CloseIcon = () => (
    <button
      aria-label="Fechar minicart"
      className="absolute top-4 right-4 z-50 p-2"
      onClick={() => setOpen(false)}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6 6l12 12M6 18L18 6" stroke="#09235C" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </button>
  );

  return (
    <div
      className={`fixed ${isMobile ? "top-0 left-0 w-full h-[100vh] z-50" : "top-16 right-0 w-full md:w-96 h-full"} bg-white p-3 overflow-y-auto`}
      style={isMobile ? { paddingTop: 0 } : {}}
    >
      <CloseIcon />
      {cartItems.length === 0 ? (
        <div className="mt-40 md:mt-60">
        <div className="text-center text-blue-700 font-black pt-10 text-2xl">
          <ShoppingCart size={50} className="m-auto block mb-4"/>
          <p>Sua sacola está vazia!</p>
        </div>
      </div>
      ) : (
        <>
        <div>
          <h2 className="text-center text-blue-600 font-bold mt-6 pb-10 text-2xl">Sua Sacola</h2>
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center gap-6 border border-gray-200 rounded p-2 mb-4">
              <figure>
                <img src={item.image} alt={item.name} className="w-26 h-auto"/>
              </figure>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <span className="bg-red-500 rounded-lg 
                      px-2 py-1 text-xs text-white font-medium
                        ">
                          {item.flagPorcentage}
                </span>
                <span className="bg-yellow-500 rounded-lg text-blue-500 font-medium text-xs px-2 py-1">{item.flagPromotion}</span>
                </div>
                
                <h3 className="text-sm w-48 overflow-hidden whitespace-nowrap text-ellipsis">{item.name}</h3>
                <div className="flex items-center gap-2">
                    <p className="font-bold text-lg text-blue-500">R$ {item.price}</p>
                    <small className="text-gray-500 text-sm font-normal line-through ">{item.listPrice}</small> 
                </div>
              </div>
              <Trash2 className="text-red-500 cursor-pointer" size={20}/>
            </div>
          ))}
        </div>

        <div className={`w-full px-2 py-4 bg-white ${isMobile ? "fixed left-0 bottom-0 z-50" : "sticky bottom-0"}`}
            style={{ boxShadow: "0 -2px 8px rgba(0,0,0,0.05)" }}
         >
          <div className="flex flex-col gap-4 w-full">
            <button className="border border-gray-200 py-2 rounded cursor-pointer text-blue-600">Continuar comprando</button>
            <button className="bg-blue-600 text-white py-2 rounded cursor-pointer">Ir para o checkout</button>
          </div>
       </div>
       </>
      )}
    </div>
  )
}