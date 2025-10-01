import { Search } from "lucide-react"

export const SearchInput = () => {
  return (
  <div className="bg-white py-5 px-2 absolute top-26 right-0 shadow-lg w-full">
    <form className="flex items-center justify-center gap-0">
      <input type="text" placeholder="Buscar jogos, consoles, produtos geek..." 
      className="relative bg-gray-200 py-3 px-8 text-xs rounded-lg w-3xl" />
      <button className="bg-blue-600 h-[32px] px-3 rounded-lg 
      absolute right-3 top-6 flex items-center justify-center">
        <Search className="filter invert" size={16}/>
      </button>
    </form>
  </div>
  )
}