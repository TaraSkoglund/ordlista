import React from "react";

function Result({ searchResult }) {
  return (
    <div>
      {searchResult && (
        <div className="font-serif max-w-2xl h-max border-2 border-black rounded p-2 flex flex-col gap-4">
          <h1 className="font-semibold text-2xl pb-4">
            {searchResult[0].word}
          </h1>
          {searchResult[0].phonetics && searchResult[0].phonetics[0].audio && (
            <audio controls>
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
                <p className="pb-3">{meaning.partOfSpeech}</p>
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
