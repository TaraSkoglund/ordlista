import axios from "axios";
import { expect, it } from "vitest";

it("should search for a word", async () => {
  const searchTerm = "hello"; // Ord att söka efter

  // Simulera sökfunktionaliteten
  const response = await axios.get(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
  );

  // AVerifiera att API-anropet var framgångsrikt (statuskod 200)
  expect(response.status).toBe(200);
});
