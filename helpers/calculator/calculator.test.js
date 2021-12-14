const {calculateFromATH, calculateToATH} = require("./calculator.ts");

jest.mock("./calculator.ts");

describe("Testing calculator functions", () => {
  test('should return info about how much Bitcoin is down from the all-time high', () => {
    const message = "Bitcoin is down 10% from the all-time high";

    calculateFromATH.mockReturnValue(message);

    const result = calculateFromATH();

    expect(result).toContain("Bitcoin is down");
    expect(result).toContain("% from the all-time high");
  });


  test('should return info about by how much Bitcoin has to rise to return to the all-time high', () => {
    const message = "Bitcoin price has to rise by 10% in order to reach the all-time high";

    calculateToATH.mockReturnValue(message);

    const result = calculateToATH();

    expect(result).toContain("Bitcoin price has to rise");
    expect(result).toContain("% in order to reach the all-time high");
  })
});