import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Result from "./Components/Result";

describe("Result component", () => {
  const searchResult = {
    word: "hello",
    phonetics: [
      {
        text: "/həˈloʊ/",
        audio: "audio.mp3",
      },
    ],
    meanings: [
      {
        partOfSpeech: "interjection",
        definitions: [
          {
            definition: "used as a greeting or to begin a conversation",
            example: "hello there",
          },
        ],
      },
    ],
  };

  it("should display search result in a user-friendly form", () => {
    render(<Result wordData={[searchResult]} />);

    // Kontrollera om ordet "hello" finns i svaret
    const responseWord = screen.getByTestId("result-word");
    expect(responseWord).toBeInTheDocument();
    expect(responseWord).toHaveTextContent("hello");
    //mer expects

    // Ytterligare påståenden för fonetik, betydelser.
  });

  it("should play audio from the API if available", () => {
    render(<Result wordData={[searchResult]} />);

    // Hitta ljudelementet
    const audioElement = screen.getByTestId("result-audio");

    // Kontrollera att ljudelementet finns
    expect(audioElement).toBeInTheDocument();

    // Kontrollera att källan till ljudelementet är korrekt
    const sourceElement = screen
      .getByTestId("result-audio")
      .querySelector("source");
    expect(sourceElement).toHaveAttribute("src", "audio.mp3");
    expect(sourceElement).toHaveAttribute("type", "audio/mp3");
  });
});

// it("should display search result in a user-friendly form", async () => {
//   // Simulate ett sökresultat från API:et
//   const searchResult = {
//     word: "hello",
//     phonetics: [{ text: "hə'ləʊ" }],
//     meanings: [
//       {
//         partOfSpeech: "exclamation",
//         definitions: [{ definition: "used as a greeting" }],
//       },
//     ],
//   };
//   // Rendera komponenten med det simulerade sökresultatet
//   const resultComponent = <Result searchResult={searchResult} />;

//   // Förväntar att komponenten renderar ordet och dess definition
//   expect(resultComponent.contains("hello")).toBe(true);
//   expect(resultComponent.contains("used as a greeting")).toBe(true);
// });
