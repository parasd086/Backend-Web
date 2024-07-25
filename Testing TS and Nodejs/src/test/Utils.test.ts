import { StringUtils, getStringInfo, toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  //Testing for errors-
  describe.only("StringUtils tests", () => {
    let sut: StringUtils;

    //runs before every test
    beforeEach(() => {
      //Here, at every test we are initializing a new class
      //This makes sure test are independent of each other
      sut = new StringUtils();
      console.log("Setup");
    });

    //runs after Every test
    afterEach(() => {
      //clearing mocks
      console.log("Teardown");
    });

    it("Should return correct upperCase", () => {
      const actual = sut.toUpperCase("abc");
      expect(actual).toBe("ABC");
    });

    it.only("Should throw error on invalid argument - function", () => {
      //right way in JEST is by wrapping the actual inside a function
      function expectError() {
        const actual = sut.toUpperCase("");
      }
      // expect(expectError).toThrow();
      expect(expectError).toThrow("Invalid Argument"); //Directly check for the specific "Invalid Argument" error
    });

    it.only("Should throw error on invalid argument - function", () => {
      //right way in JEST is by wrapping the actual inside a function
      function expectError() {
        const actual = sut.toUpperCase("");
      }
      // expect(expectError).toThrow();
      expect(expectError).toThrow("Invalid Argument"); //Directly check for the specific "Invalid Argument" error
    });

    it.only("Should throw error on invalid argument - arrow function", () => {
      expect(() => {
        sut.toUpperCase("");
      }).toThrow("Invalid Argument");
    });
  });
});
