const { describe, it, expect } = require("@jest/globals");
const { calculateByHPA } = require("./calculator");

describe("calculateByHPA", () => {
  it("returns all values calculated by hPa 1013", () => {
    const result = calculateByHPA(1013);

    expect(result).toEqual({
      hPa: 1013,
      inHg: 29.92,
      mmHg: 760,
    });
  });

  it("returns all values calculated by hPa 1020", () => {
    const result = calculateByHPA(1020);

    expect(result).toEqual({
      hPa: 1020,
      inHg: 30.12,
      mmHg: 765,
    });
  });
});
