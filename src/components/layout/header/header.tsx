import { useState } from "react";
import {  Menu as MenuIcon, Search, ShoppingCart, User, X } from "lucide-react";
import { Logo } from "../../logo";
import { Menu } from "../../menu";
import { SearchInput } from "../../search";
import { useSearch } from "../../../context/SearchContext";
import { useCart } from "../../../context/CartContext";
import { Minicart } from "../../minicart";
import { Topbar } from "../../topbar";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showMinicart, setShowMinicart] = useState(false);
  const { toggleSearch, showSearch } = useSearch();
  const { cartItems } = useCart();
  const isMobile = window.innerWidth < 768;

  return (
    <header className={`bg-white fixed top-0 z-50 w-full transition-colors duration-300`}>
      <Topbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-10 md:gap-0">
          <div className="flex items-center gap-4 w-full">
            <button type="button" onClick={() => setShowMenu((v) => !v)} className="cursor-pointer">
              {showMenu && isMobile ? <X className="text-black-500" /> : <MenuIcon className="text-black-500" /> }
            </button>
            <Logo />
          </div>

          <nav className="w-full md:w-auto">
            <ul className="flex items-center gap-6">
              <li>
                <button type="button" onClick={toggleSearch}
                  className="flex items-center gap-2 text-white cursor-pointer text-sm">
                  <Search className="text-black-500" />
                </button>
              </li>
              <li>
                <button type="button"
                  className="flex items-center gap-2 text-white cursor-pointer text-sm">
                  <User className="text-black-500" />
                  <span className="hidden md:inline">Entrar</span>
                </button>
              </li>
              <li>
                <button type="button"
                  className="flex items-center gap-2 text-white cursor-pointer text-sm"
                  onClick={() => setShowMinicart((v) => !v)}>
                  <ShoppingCart className="text-black-500" />
                  <span className="hidden md:inline">Carrinho</span>
                  <span className="rounded-full w-5 h-5 bg-yellow-500 text-xs 
                    font-medium flex items-center justify-center text-blue-500 relative -top-4 right-2">
                    {cartItems.length}
                  </span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {showMenu && <Menu showMenu={showMenu} setShowMenu={setShowMenu} />}
      {showSearch && <SearchInput />}
      {showMinicart && <Minicart />}
    </header>
  );
};