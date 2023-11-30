import axios from "axios";
import { expect, it } from "vitest";
// import Result from "./Components/Result";

it("should search for a word", async () => {
  const searchTerm = "hello"; // Ord att söka efter

  // Simulera sökfunktionaliteten
  const response = await axios.get(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
  );

  // AVerifiera att API-anropet var framgångsrikt (statuskod 200)
  expect(response.status).toBe(200);
});

it("should display search result in a user-friendly form", async () => {
  // Simulate ett sökresultat från API:et
  const searchResult = {
    word: "hello",
    phonetics: [{ text: "hə'ləʊ" }],
    meanings: [
      {
        partOfSpeech: "exclamation",
        definitions: [{ definition: "used as a greeting" }],
      },
    ],
  };
  // Rendera komponenten med det simulerade sökresultatet
  // const resultComponent = shallow(<Result searchResult={searchResult} />);

  // // Förväntar att komponenten renderar ordet och dess definition
  // expect(resultComponent.contains("hello")).toBe(true);
  // expect(resultComponent.contains("used as a greeting")).toBe(true);
});
