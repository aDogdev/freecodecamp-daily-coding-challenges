import { describe, it, expect } from "vitest";

function spaceJam(s: string): string {
  return s.split(" ").join("").split("").join("  ").toUpperCase();
}

function spaceJamCicle(s: string): string {
  let str: string = "";
  for (let char of s) {
    if (char !== " ") {
      str += char.toUpperCase() + "  ";
    }
  }
  return str.trim();
}

describe("spaceJam", () => {
  it("should return the input string with two spaces between characters and an uppercase transformation", () => {
    expect(spaceJam("freeCodeCamp")).toBe("F  R  E  E  C  O  D  E  C  A  M  P");
    expect(spaceJam("   free   Code   Camp   ")).toBe(
      "F  R  E  E  C  O  D  E  C  A  M  P"
    );
    expect(spaceJam("Hello World?!")).toBe(
      "H  E  L  L  O  W  O  R  L  D  ?  !"
    );
    expect(spaceJam("C@t$ & D0g$")).toBe("C  @  T  $  &  D  0  G  $");
    expect(spaceJam("allyourbase")).toBe("A  L  L  Y  O  U  R  B  A  S  E");
  });
});

describe("spaceJamCicle", () => {
  it("should return the input string with two spaces between characters and an uppercase transformation", () => {
    expect(spaceJamCicle("freeCodeCamp")).toBe(
      "F  R  E  E  C  O  D  E  C  A  M  P"
    );
    expect(spaceJamCicle("   free   Code   Camp   ")).toBe(
      "F  R  E  E  C  O  D  E  C  A  M  P"
    );
    expect(spaceJamCicle("Hello World?!")).toBe(
      "H  E  L  L  O  W  O  R  L  D  ?  !"
    );
    expect(spaceJamCicle("C@t$ & D0g$")).toBe("C  @  T  $  &  D  0  G  $");
    expect(spaceJamCicle("allyourbase")).toBe(
      "A  L  L  Y  O  U  R  B  A  S  E"
    );
  });
});
