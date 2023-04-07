const shuffle = require("../src/shuffle");
const botsList = require("../src/botsData")

describe("group of tests for shuffle", () => {
  test('Shuffle should return an array', () => {
    expect(Array.isArray(shuffle())).toBe(true)
  })
  test('check that there are the same number of items before and after shuffle', () => {
    let arrLength = botsList.length
    expect(shuffle(botsList).length).toBe(arrLength)
  })
});
