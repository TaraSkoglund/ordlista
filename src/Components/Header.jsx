import axios from "axios";
import { Search } from "lucide-react";
import React, { useState } from "react";

function Header({ onSearchResult }) {
  const [searchTerm, setSearchTerm] = useState("");
  const apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${apiUrl}${searchTerm}`);
      // Anropa onSearchResult-funktionen för att skicka sökresultatet tillbaka till App-komponenten
      onSearchResult(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Hantera fel här, t.ex. visa ett meddelande till användaren
    }
  };

  return (
    <header className="font-serif w-screen h-14 flex items-center gap-6 p-8">
      <h1 className="text-3xl pb-2">Q</h1>
      <label
        htmlFor="search"
        className="border-2 border-black rounded flex px-1"
      >
        <input
          type="text"
          placeholder="What do you wanna know"
          className="text-black w-96 placeholder:text-black focus:outline-none p-1"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>
          <Search />
        </button>
      </label>
    </header>
  );
}

export default Header;
