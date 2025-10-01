export const Topbar = () => {
  const isMobile = window.innerWidth < 768;
  return (
    <div className="flex items-center justify-between border-b border-gray-100 py-4 text-gray-500">
      <div className="flex items-center gap-4 text-xs md:text-sm m-auto">
        <p>Frete grátis acima de R$ 199</p>
        <p> • </p>
        <p>12x sem juros</p>
      </div>
     
      {!isMobile && (
        <div>
          <ul>
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
  );
}