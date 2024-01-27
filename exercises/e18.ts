// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy

import { Asteroid } from "../data/types";
import { maxBy } from "./e17";

export function getGreatestDiscoveryYear(asteroids: Asteroid[]): number {
  const yearMaps = new Map<number, number>();

  asteroids.forEach((asteroid) => {
    const year = asteroid.discoveryYear;
    const count = yearMaps.get(year) || 0;
    yearMaps.set(year, count + 1);
  });

  const maxYear = maxBy(
    Array.from(yearMaps.entries()),
    ([, count]) => count
  )![0] as number;

  return maxYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
