import Link from "next/link";
import { useSearch } from "./contexts/SearchProvider";
import style from "@/styles/Home.module.css"

export default function SearchHistory() {
  const { recentSearchTerms } = useSearch();
  return (
    <div>
      <h2>Search History</h2>
      {recentSearchTerms && recentSearchTerms.length ? (
        <ul className={style["search-history"]}>
          {recentSearchTerms.map((term: string, index: number) => (
            <li key={`term-${term}`} className="px-2 py-1 bg-keysysBlue-500 text-white rounded-md"><Link href={`/search/${term}`}>{term}</Link></li>
          ))}
        </ul>
      ) : (
        <p>No recent searches.</p>
      )}
    </div>
  );
}
