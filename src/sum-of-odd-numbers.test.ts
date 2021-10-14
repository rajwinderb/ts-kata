import sumOddNums from "./sum-of-odd-numbers";

test("sumOddNumes adds the row values", () => {
  expect(sumOddNums(1)).toBe(1);
  expect(sumOddNums(42)).toBe(74088);
});
