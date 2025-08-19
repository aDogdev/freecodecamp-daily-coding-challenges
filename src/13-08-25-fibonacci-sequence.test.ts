import { describe, it, expect } from "vitest";

function fibonacciSequence(startSequence: number[], length: number): number[] {
  if (length === 0) return [];
  if (length === 1) return [startSequence[0]];
  const fib: number[] = [startSequence[0], startSequence[1]];
  for (let i = 2; i < length; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

describe("Fibonacci Sequence", () => {
  it("should return a empty array if length is 0", () => {
    expect(fibonacciSequence([0, 1], 0)).toEqual([]);
  });
  it("should return the first element if length is 1", () => {
    expect(fibonacciSequence([0, 1], 1)).toEqual([0]);
    expect(fibonacciSequence([21, 32], 1)).toEqual([21]);
  });
  it("should return the first 20 elements of the Fibonacci sequence", () => {
    expect(fibonacciSequence([0, 1], 20)).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
      2584, 4181,
    ]);
  });
  it("should return the first 2 elements if length is 2", () => {
    expect(fibonacciSequence([10, 20], 2)).toEqual([10, 20]);
  });
  it("should return the first 5 elements for large numbers", () => {
    expect(fibonacciSequence([123456789, 987654321], 5)).toEqual([
      123456789, 987654321, 1111111110, 2098765431, 3209876541,
    ]);
  });
});
