import { describe, it, expect } from "vitest";

const validDigits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function isValidNumber(n: string, base: number): boolean {
  if (base < 2 || base > 36) {
    throw new Error("Base must be between 2 and 36");
  }
  for (const char of n) {
    if (validDigits.indexOf(char.toUpperCase()) >= base) {
      return false;
    }
  }
  return true;
}

describe("Base Check", () => {
  it("should return true for valid input", () => {
    expect(isValidNumber("10101", 2)).toBe(true);
    expect(isValidNumber("76543210", 8)).toBe(true);
    expect(isValidNumber("9876543210", 10)).toBe(true);
    expect(isValidNumber("ABC", 16)).toBe(true);
    expect(isValidNumber("Z", 36)).toBe(true);
    expect(isValidNumber("ABC", 20)).toBe(true);
    expect(isValidNumber("4B4BA9", 16)).toBe(true);
    expect(isValidNumber("5G3F8F", 17)).toBe(true);
    expect(isValidNumber("abc", 16)).toBe(true);
    expect(isValidNumber("AbC", 16)).toBe(true);
    expect(isValidNumber("z", 36)).toBe(true);
  });

  it("should return false for invalid input", () => {
    expect(isValidNumber("10201", 2)).toBe(false);
    expect(isValidNumber("9876543210", 8)).toBe(false);
    expect(isValidNumber("ABC", 10)).toBe(false);
    expect(isValidNumber("5G3F8F", 16)).toBe(false);
    expect(isValidNumber("abc", 10)).toBe(false);
  });
  it("should throw an error for invalid base", () => {
    expect(() => isValidNumber("10101", 1)).toThrow(
      "Base must be between 2 and 36"
    );
  });
});
