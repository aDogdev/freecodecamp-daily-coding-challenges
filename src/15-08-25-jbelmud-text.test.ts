import { describe, it, expect } from "vitest";

function jbelmu(text: string): string {
  const jbelmuWord = text
    .toLowerCase()
    .replace(/[^a-z\s]/g, "")
    .split(" ")
    .map((word) => {
      if (word.length < 3) {
        return word;
      }
      let sortedChunk = word.slice(1, -1).split("").sort().join("");
      let newWord = word[0] + sortedChunk + word[word.length - 1];
      return newWord;
    });
  return jbelmuWord.join(" ");
}

describe("jbelmu", () => {
  it("should return the transformed text", () => {
    expect(jbelmu("hello world")).toBe("hello wlord");
    expect(jbelmu("i love jumbled text")).toBe("i love jbelmud text");
    expect(jbelmu("freecodecamp is my favorite place to learn to code")).toBe(
      "faccdeeemorp is my faiortve pacle to laern to cdoe"
    );
    expect(jbelmu("the quick brown fox jumps over the lazy dog")).toBe(
      "the qciuk borwn fox jmpus oevr the lazy dog"
    );
  });
});
