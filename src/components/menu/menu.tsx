import { Headset, User, X } from "lucide-react";

type MenuProps = {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Menu = ({ showMenu, setShowMenu }: MenuProps) => {
  const isMobile = window.innerWidth < 768;

  return (
    <div
      className={`bg-white w-full h-screen md:h-auto text-white p-4 space-y-4 rounded md:w-xl 
      absolute md:top-16 md:left-80 shadow-lg top-0
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-[80px] md:mt-0">
        {/*  <div className="absolute -top-3 left-8 w-0 h-0 border-l-10 border-r-10 border-b-10 border-l-transparent
               border-r-transparent border-b-cyan-500">
        </div> */}
        
        {isMobile && (
          <div className="-mt-8">
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

        <div className="mt-2">
          <ul className="text-sm">
            <li className="py-2 text-gray-300  cursor-pointer group">
              <a className="transition-all duration-200 pl-4" href="#">Jogos</a>
            </li>
            <li className="py-2 text-gray-300  cursor-pointer group">
              <a className="transition-all duration-200 pl-4" href="#">Consoles</a>
            </li>
            <li className="py-2 text-gray-300  cursor-pointer group">
              <a className="transition-all duration-200 pl-4" href="#">PC Gaming</a>
            </li>
            <li className="py-2 text-gray-300  cursor-pointer group">
              <a className="transition-all duration-200 pl-4 " href="#">Colecionáveis</a>
            </li>
             <li className="py-2 text-gray-300  cursor-pointer group">
              <a className="transition-all duration-200 pl-4 " href="#">Ofertas</a>
            </li>
          </ul>
        </div>
       </div>
    </div>
  );
}

