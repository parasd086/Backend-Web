import { getStringInfo, toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  //test naming is expressive.
  //this test should be read as- it should return uppercase of a valid string.
  it("should return uppercase of a valid string", () => {
    // arrange:
    const sut = toUpperCase; //this is what we are testing inside this test. This is the system.
    const expected = "ABC"; //what we are expecting

    //act:
    const actual = sut("abc"); //what actually happens in the code;

    //assert:
    expect(actual).toBe(expected); //we are expecting our actual value is our expected
  });

  describe("getStringInfo for arg My-String should", () => {
    //Note- 1.Each test should be independent of each another
    test("return right length", () => {
      const actual = getStringInfo("My-String");
      expect(actual.characters).toHaveLength(9);
    });
    test("return right lower case", () => {
      const actual = getStringInfo("My-String");
      expect(actual.lowerCase).toBe("my-string");
    });
    test("return right upper case", () => {
      const actual = getStringInfo("My-String");
      expect(actual.upperCase).toBe("MY-STRING");
    });
    test("return right characters", () => {
      const actual = getStringInfo("My-String");
      expect(actual.characters).toEqual([
        "M",
        "y",
        "-",
        "S",
        "t",
        "r",
        "i",
        "n",
        "g",
      ]);
      expect(actual.characters).toContain<string>("M");
      expect(actual.characters).toEqual(
        expect.arrayContaining(["S", "t", "r", "i", "n", "g", "M", "y", "-"])
      );
    });
    //for extraInfo to not be undefined
    test("return defined extra info", () => {
      const actual = getStringInfo("My-String");
      expect(actual.extraInfo).toBeDefined();
    });
    test("return defined extra info", () => {
      const actual = getStringInfo("My-String");
      expect(actual.extraInfo).toEqual({});
    });
  });
});
