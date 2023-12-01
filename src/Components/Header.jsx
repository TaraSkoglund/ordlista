// Header.js - Hanterar sökfältet och API-anropet
import { Search } from "lucide-react";
import React, { useState } from "react";

function Header({ onSearchResult }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  const handleSearch = async () => {
    try {
      // Gör API-anrop för att hämta sökresultatet
      const response = await fetch(`${apiUrl}${searchTerm}`);
      // Anropa onSearchResult-funktionen för att skicka sökresultatet tillbaka till App-komponenten

      onSearchResult((await response.json()).data);
      setErrorMessage(""); // Nollställ eventuellt tidigare felmeddelande vid lyckad sökning
    } catch (error) {
      console.error("Error fetching data:", error);
      setErrorMessage("Failed to fetch data. Please try again.");
    }
  };

  return (
    <header className="font-serif w-screen h-14 flex items-center gap-6 p-8">
      <h1 className="text-3xl pb-2">Q</h1>
      <div>
        <label
          htmlFor="search"
          className="border-2 border-black rounded flex px-1"
        >
          {/* Sökinmatning och sökknapp */}
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
        {/* Visa felmeddelandet om det finns */}
        {errorMessage && <p className="text-red-500 px-2">{errorMessage}</p>}
      </div>
    </header>
  );
}

export default Header;
