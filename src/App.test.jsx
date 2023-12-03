import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import Header from "./Components/Header";
import Result from "./Components/Result";

test("Användaren kan söka efter ord i ett sökfält", async () => {
  render(<App />); // Rendera din App-komponent

  // Hitta sökinmatningen
  const searchInput = screen.getByPlaceholderText("What do you wanna know");

  // Skriv in ordet att söka efter
  fireEvent.change(searchInput, { target: { value: "hello" } });

  // Hitta sökknappen och klicka på den
  const searchButton = screen.getByRole("button");
  fireEvent.click(searchButton);

  // Vänta på att sökresultatet ska visas
  await waitFor(() => {
    const resultWord = screen.getByTestId("result-word");
    expect(resultWord).toBeInTheDocument();
    expect(resultWord).toHaveTextContent("hello"); // Verifiera att ordet visas i resultatet
  });
});

describe("Result component", () => {
  const mockSearchResult = [
    {
      word: "hello",
      phonetic: "hə'ləʊ",
      phonetics: [
        {
          text: "hə'ləʊ",
          audio:
            "//ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3",
        },
        {
          text: "hɛ'ləʊ",
        },
      ],
      origin:
        "early 19th century: variant of earlier hollo ; related to holla.",
      meanings: [
        {
          partOfSpeech: "exclamation",
          definitions: [
            {
              definition:
                "used as a greeting or to begin a phone conversation.",
              example: "hello there, Katie!",
              synonyms: [],
              antonyms: [],
            },
          ],
        },
      ],
    },
  ];

  test("Användaren kan se svaret från Free Dictionary API i en användarvänlig form", () => {
    render(<Result searchResult={mockSearchResult} />);

    // Verifiera att ordet visas korrekt
    const wordElement = screen.getByTestId("result-word");
    expect(wordElement).toBeInTheDocument();
    expect(wordElement).toHaveTextContent("hello");

    // Verifiera att definitioner visas korrekt
    const definitionElement = screen.getByText(
      "used as a greeting or to begin a phone conversation."
    );
    expect(definitionElement).toBeInTheDocument();
  });

  test("Användaren kan spela upp ljudfilen från API:et om den finns tillgänglig", () => {
    render(<Result searchResult={mockSearchResult} />);

    // Hitta ljudspelaren på gränssnittet
    const audioPlayer = screen.getByTestId("result-audio");

    // Simulera klick för att spela upp ljudet
    fireEvent.click(audioPlayer);

    // Förväntar att ljudet spelas upp
    expect(audioPlayer).toHaveAttribute("controls"); // Kontrollera om ljudspelaren har kontroller
  });
});

test("Användaren kan se ett error om de söker med ett tomt sökfält", async () => {
  render(<Header />); // Rendera din Header-komponent

  // Hitta sökknappen
  const searchButton = screen.getByRole("button");

  // Klicka på sökknappen utan att skriva in något i sökfältet
  fireEvent.click(searchButton);

  // Vänta på att felmeddelandet ska visas
  await waitFor(() => {
    const errorMessage = screen.getByText(
      "Failed to fetch data. Please try again."
    );
    expect(errorMessage).toBeInTheDocument(); // Verifiera att felmeddelandet visas
  });
});

test("Användaren får ett meddelande om ordet inte finns", async () => {
  render(<App />); // Rendera din App-komponent

  // Hitta sökinmatningen
  const searchInput = screen.getByPlaceholderText("What do you wanna know");

  // Skriv in ett ord som inte finns
  fireEvent.change(searchInput, { target: { value: "wordThatDoesNotExist" } });

  // Hitta sökknappen och klicka på den
  const searchButton = screen.getByRole("button");
  fireEvent.click(searchButton);

  // Vänta på att felmeddelandet ska visas
  await waitFor(() => {
    const errorMessage = screen.getByText(
      "Failed to fetch data. Please try again."
    );
    expect(errorMessage).toBeInTheDocument(); // Verifiera att felmeddelandet visas
  });
});
