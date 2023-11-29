import React, { useState } from "react";
import Header from "./Components/Header";
import Result from "./Components/Result";

function App() {
  const [searchResult, setSearchResult] = useState(null);

  // Funktion för att uppdatera sökresultatet från API-anropet
  const handleSearchResult = (result) => {
    setSearchResult(result);
  };

  return (
    <div>
      <Header onSearchResult={handleSearchResult} />
      <div className="w-full h-screen bg-red-800 p-12 flex justify-center gap-4">
        {/* Skicka sökresultatet som en prop till Result */}
        <Result searchResult={searchResult} />
      </div>
    </div>
  );
}

export default App;
