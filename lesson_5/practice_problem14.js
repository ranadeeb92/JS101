// Advanced javascript collections
// Practice problem 14
/**
 * Given the following data structure write some code to return an array containing
 * the colors of the fruits and the sizes of the vegetables.
 * The sizes should be uppercase, and the colors should be capitalized.
 * the output should be like this :
 * [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]
 */

let obj = {
  grape: { type: "fruit", colors: ["red", "green"], size: "small" },
  carrot: { type: "vegetable", colors: ["orange"], size: "medium" },
  apple: { type: "fruit", colors: ["red", "green"], size: "medium" },
  apricot: { type: "fruit", colors: ["orange"], size: "medium" },
  marrow: { type: "vegetable", colors: ["green"], size: "large" },
};

let output = Object.values(obj).map((innerObj) => {
  if (innerObj.type === "fruit") {
    return innerObj.colors.map((color) => {
      return color[0].toUpperCase() + color.slice(1);
    });
  } else {
    return innerObj.size.toUpperCase();
  }
});

console.log(output);
