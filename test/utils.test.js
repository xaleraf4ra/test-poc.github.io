const { add, subtract, isNonEmptyString } = require("../src/utils");

describe("add", () => {
  test("adds two positive numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("adds a positive and a negative number", () => {
    expect(add(5, -3)).toBe(2);
  });

  test("adds two negative numbers", () => {
    expect(add(-1, -4)).toBe(-5);
  });
});

describe("subtract", () => {
  test("subtracts two positive numbers", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("subtracts a larger number from a smaller one", () => {
    expect(subtract(3, 7)).toBe(-4);
  });

  test("subtracts zero", () => {
    expect(subtract(5, 0)).toBe(5);
  });
});

describe("isNonEmptyString", () => {
  test("returns true for a non-empty string", () => {
    expect(isNonEmptyString("hello")).toBe(true);
  });

  test("returns false for an empty string", () => {
    expect(isNonEmptyString("")).toBe(false);
  });

  test("returns false for a number", () => {
    expect(isNonEmptyString(42)).toBe(false);
  });

  test("returns false for null", () => {
    expect(isNonEmptyString(null)).toBe(false);
  });

  test("returns false for undefined", () => {
    expect(isNonEmptyString(undefined)).toBe(false);
  });
});
