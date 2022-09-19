// ----------
// Day-13 : Tue 6 Sep - Code Challange Number 11 - removeDuplication
// ----------
/**
 * Complete the method/function so that it removes the duplication letter
 */
/**
 * Examples
  "hello"  gets converted to "helo"
  "absadsasdasdad"  gets converted to "absd"
  "good morning"  gets converted to "god mrni"
 */ /*time complexity is O(N)*/
function removeDuplication(str) {
  return [...new Set(str.split(""))].join("");
}
describe("Tests", () => {
  it("test removeDuplication", () => {
    expect(removeDuplication("hello")).toStrictEqual("helo");
    expect(removeDuplication("absadsasdasdad")).toStrictEqual("absd");
    expect(removeDuplication("good morning")).toStrictEqual("god mrni");
  });
});
