import { useState } from "react";
import { Logo } from "../../logo";

export const Footer = () => {
  const [openProdutos, setOpenProdutos] = useState(false);
  const [openAtendimento, setOpenAtendimento] = useState(false);
  const [openContato, setOpenContato] = useState(false);

  const isMobile = window.innerWidth <= 768;

  const ArrowIcon = ({ open }: { open: boolean }) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="inline ml-2">
      <path d={open ? "M5 13l5-5 5 5" : "M5 7l5 5 5-5"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <footer className="w-full bg-blue-500">
      <div className="text-white flex justify-center flex-col text-center mt-8 mr-4 ml-4 mb-8">
        <h2 className="text-2xl font-bold mb-4">Fique por dentro das novidades</h2>
        <span className="text-base text-white-200">Receba primeiro as ofertas exclusivas, lançamentos e promoções especiais</span>
        <form className="flex justify-center items-center gap-4 mt-6 mb-6">
          <input
            type="text"
            placeholder="Seu e-mail"
            className="bg-white rounded-lg py-2 text-gray-700 text-sm pl-2 border border-white"
          />
          <button className="text-blue-600 bg-yellow-500 rounded-lg py-2 px-2 border border-0 cursor-pointer text-sm">Inscrever</button>
        </form>
      </div>
      <div className="border-t border-white">
        <ul className="mr-4 ml-4">
          <li className="mt-6 mb-8">
            <Logo color="#fff" />
            <p className="text-white-200 mt-4 mb-4 text-base font-normal">
              Sua loja especializada em games, consoles e produtos geek.
              Qualidade garantida e os melhores preços do mercado.
            </p>
            <ul className="flex items-center gap-6">
              <li>
                <a href="#">
                  <img src="./icon-facebook.svg" alt="Icone Facebook" className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./icon-instagram.svg" alt="Icone Instagram" className="w-6 h-6"/>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./iconx.svg" alt="Icone X" className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./icon-youtube.svg" alt="Icone Youtube" className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </li>

          
          <li className="mt-6 mb-6 text-base font-normal text-base">
            <h3
              className="font-bold text-white mb-4 flex items-center justify-between cursor-pointer"
              onClick={() => isMobile && setOpenProdutos((v) => !v)}
            >
              Produtos
              {isMobile && <ArrowIcon open={openProdutos} />}
            </h3>
            <ul
              className={`text-white-200 transition-all duration-300 overflow-hidden ${isMobile ? (openProdutos ? "max-h-96 opacity-100" : "max-h-0 opacity-0") : "max-h-full opacity-100"}`}
            >
              <li className="py-2">
                <a href="#">PlayStation 5</a>
              </li>
              <li className="py-2">
                <a href="#">Xbox Series X/S</a>
              </li>
              <li className="py-2">
                <a href="#">Nintendo Switch</a>
              </li>
              <li className="py-2">
                <a href="#">PC Gaming</a>
              </li>
              <li className="py-2">
                <a href="#">Acessórios</a>
              </li>
              <li className="py-2">
                <a href="#">Colecionáveis</a>
              </li>
            </ul>
          </li>

         
          <li className="mt-6 mb-6 text-base font-normal text-base">
            <h3
              className="font-bold text-white mb-4 flex items-center justify-between cursor-pointer"
              onClick={() => isMobile && setOpenAtendimento((v) => !v)}
            >
              Atendimento
              {isMobile && <ArrowIcon open={openAtendimento} />}
            </h3>
            <ul
              className={`text-white-200 transition-all duration-300 overflow-hidden ${isMobile ? (openAtendimento ? "max-h-96 opacity-100" : "max-h-0 opacity-0") : "max-h-full opacity-100"}`}
            >
              <li className="py-2">
                <a href="#">Central de Ajuda</a>
              </li>
              <li className="py-2">
                <a href="#">Como Comprar</a>
              </li>
              <li className="py-2">
                <a href="#">Trocas e Devoluções</a>
              </li>
              <li className="py-2">
                <a href="#">Garantia</a>
              </li>
              <li className="py-2">
                <a href="#">Frete e Entregas</a>
              </li>
              <li className="py-2">
                <a href="#">Formas de Pagamento</a>
              </li>
            </ul>
          </li>

          
          <li className="mt-6 mb-6 text-base font-normal text-base">
            <h3
              className="font-bold text-white mb-4 flex items-center justify-between cursor-pointer"
              onClick={() => isMobile && setOpenContato((v) => !v)}
            >
              Contato
              {isMobile && <ArrowIcon open={openContato} />}
            </h3>
            <ul
              className={`text-white-200 transition-all duration-300 overflow-hidden ${isMobile ? (openContato ? "max-h-96 opacity-100" : "max-h-0 opacity-0") : "max-h-full opacity-100"}`}
            >
              <li className="py-2">
                <a href="#">(11) 3000-0000</a>
              </li>
              <li className="py-2">
                <a href="#">contato@geekstore.com.br</a>
              </li>
              <li className="py-2">
                <span>Rua dos Gamers, 123 <br />
                  São Paulo - SP <br />
                  CEP: 01234-567
                </span>
              </li>
              <li className="mt-4">
                <p className="text-white">Horário de Atendimento</p>
                <div className="flex flex-col">
                  <span className="py-2">Segunda a Sexta: 8h às 18h</span>
                  <span>Sábado: 8h às 14h</span>
                </div>
              </li>
            </ul>
          </li>
         </ul>
      </div>
      <div className="flex flex-col items-center border-t border-white py-4 px-4">
        <div>
          <p className="text-white-200 text-sm">© 2024 GeekStore. Todos os direitos reservados.</p>
        </div>
        <div className="mt-4">
          <ul className="flex items-center gap-2 text-white-200 text-sm">
            <li>
              <a href="#">Política de Privacidade</a>
            </li>
            <li>
              <a href="#">Termos de Uso</a>
            </li>
            <li>
              <a href="#">Cookies</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}