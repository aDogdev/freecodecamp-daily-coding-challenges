import { describe, it, expect } from "vitest";

function findTarget(
  arr: number[],
  target: number
): [number, number] | "Target not found" {
  const seen = new Map<number, number>();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];

    if (seen.has(complement)) {
      const j: number | undefined = seen.get(complement);
      if (j !== undefined) return [j, i];
    }

    seen.set(arr[i], i);
  }

  return "Target not found";
}

describe("findTarget", () => {
  it("should return the indices of the two numbers that add up to the target", () => {
    expect(findTarget([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(findTarget([3, 2, 4, 5], 6)).toEqual([1, 2]);
    expect(findTarget([1, 3, 5, 6, 7, 8], 15)).toEqual([4, 5]);
  });
  it("should work with duplicate values (no same index twice)", () => {
    expect(findTarget([3, 3], 6)).toEqual([0, 1]);
  });
  it("should handle negative numbers", () => {
    expect(findTarget([-2, 1, 4, -3], -5)).toEqual([0, 3]);
  });
  it("should handle empty and single-element arrays", () => {
    expect(findTarget([], 0)).toEqual("Target not found");
    expect(findTarget([42], 42)).toEqual("Target not found");
  });
  it("should return 'Target not found' if no two numbers add up to the target", () => {
    expect(findTarget([2, 7, 11, 15], 10)).toEqual("Target not found");
  });
});
