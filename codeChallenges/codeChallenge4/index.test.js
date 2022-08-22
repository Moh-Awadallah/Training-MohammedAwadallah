/**
 * Complete the method/function so that it converts dash/underscore delimited words or any type from camel casing to snake case
 * The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
 */
/**
 * Examples
  "theStealthWarrior"  gets converted to "the-stealth-warrior"
  "TheStealthWarrior"  gets converted to "The_Stealth_Warrior"
 */
function toSnakeCase(str) {
    
 let newStr = str.replace(/[A-Z]/g, (char) => '_'+`${char.toLowerCase()}`)
 return newStr.charAt(0) + newStr.substring(1);
 
//  //    let arr = str.split('')
//    arr[0].toLowerCase() 
//    let str2 = arr.join('')
//  let newStr = str2.replace(/[A-Z]/g, (char) => '_'+`${char.toLowerCase()}`)
// return newStr;
}
describe("toSnakeCase ", () => {
  describe("When toSnake methode is invoked", () => {
    it("should convert empty string to empty string", () => {
      expect(toSnakeCase("")).toStrictEqual("");
    });
    it("should convert non-empty string to snake_case string", () => {
      expect(toSnakeCase("theStealthWarrior")).toStrictEqual(
        "the_stealth_warrior"
      );
      expect(toSnakeCase("TheStealthWarrior")).toStrictEqual(
        "the_stealth_warrior"
      );
      expect(toSnakeCase("ABC")).toStrictEqual("a_b_c");
    });
  });
});
