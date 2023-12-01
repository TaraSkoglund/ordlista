import { render } from "react-dom";
import App from "./App";

it.only("asd", () => {
  expect(true).toBe(true);
  render(<App />);
});

it("should search for a word", async () => {
  // const searchTerm = "hello"; // Ord att söka efter
  // // Simulera sökfunktionaliteten
  // const response = await axios.get(
  //   `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
  // );
  // // AVerifiera att API-anropet var framgångsrikt (statuskod 200)
  // expect(response.status).toBe(200);
});

// it("should show an error message for empty search field", async () => {
//   const onSearchResultMock = vi.mock(); // Skapa en mock-funktion för onSearchResult

//   // Rendera Header-komponenten med en mockad onSearchResult-funktion
//   const headerComponent = render(
//     <Header onSearchResult={onSearchResultMock} />
//   );

//   // Simulera en sökning med ett tomt sökfält
//   headerComponent.find("button").simulate("click");

//   // Förvänta dig att ett felmeddelande visas
//   expect(
//     headerComponent.contains("Failed to fetch data. Please try again.")
//   ).toBe(true);
// });
