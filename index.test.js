const checkOverlap = require("./index");

describe("checkOverlap Function", () => {
  test("should throw an error if input is not an array", () => {
    expect(() => {
      checkOverlap({ range1Start: 4, range1End: 10 });
    }).toThrow("Input must be an array");
  });

  test("should throw an error if input is an object instead of array", () => {
    expect(() => {
      checkOverlap({ a: 1, b: 2 });
    }).toThrow("Input must be an array");
  });
});

describe("checkOverlap Overlap Range Scenarios", () => {
  test("should return false if the array is empty", () => {
    expect(checkOverlap([])).toBe(false);
  });

  test("should work correctly with valid array input", () => {
    const arr = [5, 15, 8, 12, 4];
    expect(checkOverlap(arr)).toBe(true);
  });

  test("should return true when ranges overlap by exactly X numbers", () => {
    const arr = [1, 5, 3, 7, 3];
    expect(checkOverlap(arr)).toBe(true);
  });

  test("should return false when there is no overlap between ranges", () => {
    const arr = [1, 3, 5, 7, 2];
    expect(checkOverlap(arr)).toBe(false);
  });

  test("should return true when the overlap is greater than X numbers", () => {
    const arr = [10, 20, 15, 25, 3];
    expect(checkOverlap(arr)).toBe(true);
  });

  test("should return false when overlap is less than X numbers", () => {
    const arr = [5, 10, 8, 9, 3];
    expect(checkOverlap(arr)).toBe(false);
  });

  test("should return true when the ranges are identical and overlap fully", () => {
    const arr = [4, 8, 4, 8, 5];
    expect(checkOverlap(arr)).toBe(true);
  });
});
