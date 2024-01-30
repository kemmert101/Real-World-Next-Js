import { useRouter } from "next/router";
import { useState } from "react";
import { useSearch } from "./contexts/SearchProvider";
import SearchHistory from "./SearchHistory";
import { Switch } from "@headlessui/react";
import Button, { ButtonStyleTypes } from "./Buttons/Button";

export default function SearchBar({
  initialSearchTerm,
}: {
  initialSearchTerm?: string;
}) {
  const router = useRouter();
  const { addTerm } = useSearch();
  const [searchInput, setSearchInput] = useState<string | undefined>(
    initialSearchTerm
  );
  const [enabled, setEnabled] = useState(false);

  const handleSearch = (e: any) => {
    e.preventDefault();
    if (!searchInput?.trim()) {
      alert("Type something in, dummy.");
    } else {
      addTerm(searchInput);
      router.push(`/search/${searchInput}`);
    }
  };

  return (
    <>
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={searchInput}
          className="border-2 border-gray p-2 mr-4 rounded-xl text-black"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button className="" styleType={ButtonStyleTypes.PRIMARY} type="submit">Search</Button>
        <div>
          <SearchHistory />
        </div>
      </form>

    </>
  );
}
