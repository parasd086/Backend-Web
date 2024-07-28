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

    it("Should throw error on invalid argument - function", () => {
      //right way in JEST is by wrapping the actual inside a function
      function expectError() {
        const actual = sut.toUpperCase("");
      }
      // expect(expectError).toThrow();
      expect(expectError).toThrow("Invalid Argument"); //Directly check for the specific "Invalid Argument" error
    });

    it("Should throw error on invalid argument - arrow function", () => {
      expect(() => {
        sut.toUpperCase("");
      }).toThrow("Invalid Argument");
    });

    it.only("Should throw error on invalid argument- try-catch block", (done) => {
      try {
        sut.toUpperCase("");
        done("GetStringInfo should throw error for invalid arg!"); //This is when the system/function do not throw error from their side. In such case, the catch block won't run. But, we want to throw error in such a scenario.
      } catch (error) {
        expect(error).toBeInstanceOf(Error); //Error is of type ErrorConstructor
        expect(error).toHaveProperty("message", "Invalid Argument");
        done();
      }
    });
  });
});
