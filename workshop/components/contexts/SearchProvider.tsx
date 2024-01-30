import { createContext, PropsWithChildren, useContext, useMemo, useState } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";

const SearchContext = createContext<{
  recentSearchTerms: string[];
  addTerm: (term: string) => void;
}>({
  recentSearchTerms: [],
  addTerm: () => {},
});

export default function SearchProvider({children}: PropsWithChildren) {
    const [recentSearchTerms, setRecentSearchTerms] = useLocalStorage("recentSearchTerms", []);
    //const [recentSearchTerms, setRecentSearchTerms]=useState<string[]>(value);
    const addTerm = (term: string) => {
      setRecentSearchTerms((prev: []) => [term.toLowerCase(), ...prev.filter(t => t !== term.toLowerCase())].slice(0, 10));
    }
    
    const memoValue = useMemo(() => ({recentSearchTerms, addTerm}), [recentSearchTerms]);
    return <SearchContext.Provider value={memoValue}>{children}</SearchContext.Provider>;
}

export const useSearch = () => {
    const context = useContext(SearchContext);
    if (context === undefined) {
        throw new Error('useSearch must be used within a SearchProvider');
    }
    return context;
}
