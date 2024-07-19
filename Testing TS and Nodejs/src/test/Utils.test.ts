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

  it.only("should return info for valid string", () => {
    const actual = getStringInfo("My-String");

    expect(actual.lowerCase).toBe("my-string");
    expect(actual.extraInfo).toEqual({});

    expect(actual.characters.length).toBe(9);
    expect(actual.characters).toHaveLength(9);

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
    expect(actual.characters).toContain<string>("M"); //if it contains 'M' element which is in string fromat.
    expect(actual.characters).toEqual(
      expect.arrayContaining(["S", "t", "r", "i", "n", "g", "M", "y", "-"])
    ); //check for arrays when we dont know the order of the element

    //checking for undefined
    expect(actual.extraInfo).not.toBe(undefined);
    expect(actual.extraInfo).not.toBeUndefined();
    expect(actual.extraInfo).toBeDefined();
    expect(actual.extraInfo).toBeTruthy();
  });
});
