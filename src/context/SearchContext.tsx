import { createContext, useContext, useState, type ReactNode } from "react";

interface SearchContextType {
  showSearch: boolean;
  toggleSearch: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) throw new Error("useSearch must be used within a SearchProvider");
  return context;
};

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [showSearch, setShowSearch] = useState(false);
  const toggleSearch = () => setShowSearch((v) => !v);

  return (
    <SearchContext.Provider value={{ showSearch, toggleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
