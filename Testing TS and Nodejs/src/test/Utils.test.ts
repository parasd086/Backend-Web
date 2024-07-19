import { toUpperCase } from "../app/Utils";

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
});
