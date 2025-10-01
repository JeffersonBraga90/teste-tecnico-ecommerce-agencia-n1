export const Topbar = () => {
  const isMobile = window.innerWidth < 768;
  return (
    <div className="border-b border-gray-100 py-4 md:py-2 text-gray-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <div className="flex items-center gap-4 text-xs md:text-sm m-auto md:m-0">
        <p>Frete grátis acima de R$ 199</p>
        <p> • </p>
        <p>12x sem juros</p>
      </div>
     
      {!isMobile && (
        <div >
          <ul className="md:flex md:items-center md:gap-6 md:text-sm">
            <li>
              <a href="#">Minha Conta</a>
            </li>
            <li>
              <a href="#">Atendimento</a>
            </li>
          </ul>
        </div>
      )}
      </div>
    </div>
  );
}