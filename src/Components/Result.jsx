import React from "react";

function Result({ searchResult }) {
  return (
    <div className="font-serif max-w-md h-max border-2 border-black rounded p-2">
      {searchResult && (
        <>
          <h1 className="font-semibold text-xl pb-6">{searchResult[0].word}</h1>
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
                <p className="pb-2">{meaning.partOfSpeech}</p>
                {meaning.definitions &&
                  meaning.definitions.map((definition, index) => (
                    <div key={index}>
                      <p>{definition.definition}</p>
                      <p>Example: {definition.example}</p>
                    </div>
                  ))}
              </div>
            ))}
        </>
      )}
    </div>
  );
}

export default Result;
