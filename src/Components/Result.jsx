// Result.js - Visar sökresultatet från API-anropet
import React from "react";

function Result({ searchResult }) {
  return (
    <div>
      {/* Om det finns sökresultat */}
      {searchResult && (
        <div className="font-serif max-w-2xl h-max border-2 border-black rounded p-2 flex flex-col gap-3">
          {/* Visa ordet, fonetisk information och definitioner */}
          <h1 className="font-semibold text-2xl pb-4" data-testid="result-word">
            {searchResult[0].word}
          </h1>
          {searchResult[0].phonetics && searchResult[0].phonetics[0].audio && (
            <audio controls data-testid="result-audio">
              <source
                src={searchResult[0].phonetics[0].audio}
                type="audio/mpeg"
              />
              Your browser does not support the audio element.
            </audio>
          )}
          {searchResult[0].meanings &&
            searchResult[0].meanings.map((meaning, index) => (
              <div key={index}>
                <p className="pb-3 font-semibold text-lg">
                  {meaning.partOfSpeech}:
                </p>
                {/* Visa definition och exempel för varje betydelse */}
                {meaning.definitions &&
                  meaning.definitions.map((definition, index) => (
                    <div key={index}>
                      <p className="pb-3">{definition.definition}</p>
                      <p className="pb-3">{definition.example}</p>
                    </div>
                  ))}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Result;
