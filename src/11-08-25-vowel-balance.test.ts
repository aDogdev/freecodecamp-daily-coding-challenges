import { describe, it, expect } from "vitest";

const VOWELS = ["a", "e", "i", "o", "u"];

const countVowels = (str: string): number => {
  let count = 0;
  for (const letter of str.toLowerCase()) {
    if (VOWELS.includes(letter)) count++;
  }
  return count;
};

function isBalanced(s: string): boolean {
  const firstHalf = s.slice(0, Math.floor(s.length / 2));
  const secondHalf = s.slice(Math.ceil(s.length / 2));
  return countVowels(firstHalf) === countVowels(secondHalf);
}

describe("countVowels", () => {
  it("should return the number of vowels in a string", () => {
    expect(countVowels("hello")).toBe(2);
    expect(countVowels("world")).toBe(1);
    expect(countVowels("aeiou")).toBe(5);
  });
});

describe("isBalanced", () => {
  it("should return true for a balanced string", () => {
    expect(isBalanced("racecar")).toBe(true);
    expect(isBalanced("Lorem Ipsum")).toBe(true);
    expect(isBalanced("123A#b!E&#x26;*456-o.U")).toBe(true);
  });
  it("should return false for an unbalanced string", () => {
    expect(isBalanced("Kitty Ipsum")).toBe(false);
    expect(isBalanced("abcdefghijklmnopqrstuvwxyz")).toBe(false);
  });
  it("should return true for a single whitespace character", () => {
    expect(isBalanced(" ")).toBe(true);
  });
});
