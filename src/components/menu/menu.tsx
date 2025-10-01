import { Headset, User, X } from "lucide-react";

type MenuProps = {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Menu = ({ showMenu, setShowMenu }: MenuProps) => {
  const isMobile = window.innerWidth < 768;

   const ArrowIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="inline ml-2">
      <path d="M5 7l5 5 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  );

  return (
    <div
      className={`bg-white w-full h-screen md:h-auto text-white p-4 space-y-4  
      absolute md:top-16 shadow-lg md:shadow-none top-0 md:mt-8 
      ${isMobile ? 'transition-transform duration-1000 transform ' + (showMenu ? 'translate-x-0' : '-translate-x-full') : ''}`}
      style={isMobile ? { left: 0 } : {}}
    >
      
      {isMobile && showMenu && (
        <div className="flex items-center">
          <p className="text-black-500 mt-4 font-bold">Menu</p>
          <button
            type="button"
            onClick={() => setShowMenu(false)}
            className="absolute top-6 right-2 z-50 p-2"
          >
            <X className="text-black-500" />
          </button>
        </div>
      )}
      <div className="mt-[80px] md:mt-0 md:flex md:justify-start mx-auto max-w-7xl md:px-4 sm:px-6 lg:px-8">
        {isMobile && (
          <div className="-mt-8 mb-8">
            <ul className="text-sm flex items-center justify-center gap-6">
              <li className="flex items-center text-black-700 cursor-pointer bg-gray-200 p-4 rounded">
                 <User className="text-black-700" />
                <a className="transition-all duration-200 pl-4" href="#">Minha Conta</a>
              </li>
              <li className="flex items-center text-black-700 cursor-pointer bg-gray-200 p-4 rounded ">
                <Headset className="text-black-700" />
                <a className="transition-all duration-200 pl-4" href="#">Atendimento</a>
              </li>
            </ul>
          </div>
        )}

        <div className="mt-2 md:mt-4 md:flex md:justify-center md:items-center">
          <ul className="text-sm md:flex md:gap-4 md:space-x-0 md:space-y-0">
            <li className="py-2 text-gray-300 cursor-pointer group bg-gray-800 
            rounded-lg mb-2 w-24 md:mb-0 md:w-auto md:px-4">
              <a className="transition-all duration-200 pl-4 md:pl-0" href="#">Jogos</a>
              <span><ArrowIcon /></span>
            </li>
            <li className="py-2 text-gray-300 cursor-pointer group bg-gray-800 
            rounded-lg w-28 md:w-auto md:px-4">
              <a className="transition-all duration-200 pl-4 md:pl-0" href="#">Consoles</a>
              <span><ArrowIcon /></span>
            </li>
            <li className="py-2 text-gray-300 cursor-pointer group md:px-4">
              <a className="transition-all duration-200 pl-4 md:pl-0" href="#">PC Gaming</a>
            </li>
            <li className="py-2 text-gray-300 cursor-pointer group md:px-4">
              <a className="transition-all duration-200 pl-4 md:pl-0" href="#">Colecionáveis</a>
            </li>
            <li className="py-2 text-gray-300 cursor-pointer group md:px-4">
              <a className="transition-all duration-200 pl-4 md:pl-0" href="#">Ofertas</a>
            </li>
          </ul>
        </div>
       </div>
    </div>
  );
}

