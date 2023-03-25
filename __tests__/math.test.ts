import { sum } from "../src/utils/math";

describe("test math library", () => {
  test("sum function must return number", () => {
    expect(sum(10, 10)).toBe(20);
  });
});
