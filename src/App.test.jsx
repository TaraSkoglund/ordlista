import axios from "axios";
import { expect, it, shallow, vi } from "vitest";
// import Result from "./Components/Result";
import Header from "./Components/Header";

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

  // Förväntar att komponenten renderar ordet och dess definition
  // expect(resultComponent.contains("hello")).toBe(true);
  // expect(resultComponent.contains("used as a greeting")).toBe(true);
});

it("should show an error message for empty search field", async () => {
  const onSearchResultMock = vi.mock(); // Skapa en mock-funktion för onSearchResult

  // Rendera Header-komponenten med en mockad onSearchResult-funktion
  const headerComponent = shallow(
    <Header onSearchResult={onSearchResultMock} />
  );

  // Simulera en sökning med ett tomt sökfält
  headerComponent.find("button").simulate("click");

  // Förvänta dig att ett felmeddelande visas
  expect(
    headerComponent.contains("Failed to fetch data. Please try again.")
  ).toBe(true);
});

it("should play audio from the API if available", () => {
  const searchResultWithAudio = {
    word: "hello",
    phonetics: [
      {
        text: "hə'ləʊ",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3",
      },
    ],
    meanings: [
      {
        partOfSpeech: "exclamation",
        definitions: [{ definition: "used as a greeting" }],
      },
    ],
  };

  const headerComponent = shallow(<Header />);

  // Uppdatera sökresultatet i komponenten
  headerComponent.instance.setState({ searchResult: searchResultWithAudio });

  // Förvänta dig att ljudkomponenten finns och innehåller en länk till en ljudfil
  expect(headerComponent.find("audio").exists()).toBe(true);
  expect(headerComponent.find("source").prop("src")).toBe(
    searchResultWithAudio.phonetics[0].audio
  );
});
