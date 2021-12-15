// Comparison with the Strict Equality OperatorPassed
// // Setup
// function testStrict(val) {
//   if (7 === val) {
//     // Change this line
//     return "Equal";
//   }
//   return "Not Equal";
// }

// console.log(testStrict(10)); // not equal
// console.log(testStrict(7)); // equal
// console.log(testStrict("7")); // not equal
// testStrict(10); // not equal
// testStrict(7); // equal
// testStrict("7"); // not equal

// Practice comparing different values
// Setup
// function compareEquality(a, b) {
//   if (a === b) { // Change this line
//     return "Equal";
//   }
//   return "Not Equal";
// }

// const a = compareEquality(10, "10");
// const b = compareEquality("20", 20);
// console.log(a);
// console.log(b);

// Comparison with the Inequality Operator
// Setup
// function testNotEqual(val) {
//   if (99 != val) { // Change this line
//       return "Not Equal";
//   }
//   return "Equal";
// }

// const a = testNotEqual(99);
// const b = testNotEqual("99");
// const c = testNotEqual(12);
// const d = testNotEqual("12");
// const e = testNotEqual("bob");
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// // Comparison with the Strict Inequality Operator
// // Setup
// function testStrictNotEqual(val) {
//   if (17 !== val) { // Change this line
//     return "Not Equal";
//   }
//   return "Equal";
// }

// const a = testStrictNotEqual(10);
// console.log(a);
// // console.log(b);
// // console.log(c);
// // console.log(d);
// // console.log(e);

// // Comparison with the Greater Than Operator
// function testGreaterThan(val) {
//   if (val > 100.5) {
//     // Change this line
//     return "Over 100";
//   }

//   if (val > 10.5) {
//     // Change this line
//     return "Over 10";
//   }

//   return "10 or Under";
// }

// let a = testGreaterThan(0);
// let b = testGreaterThan(10);
// let c = testGreaterThan(11);
// let d = testGreaterThan(99);
// let e = testGreaterThan(101);
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// // Comparison with the Greater Than Or Equal To Operator
// function testGreaterOrEqual(val) {
//   if (val >= 20) {
//     // Change this line
//     return "20 or Over";
//   }

//   if (val >= 10) {
//     // Change this line
//     return "10 or Over";
//   }

//   return "Less than 10";
// }

// let a = testGreaterOrEqual(0);
// console.log(a);
// let b = testGreaterOrEqual(10);
// console.log(b);
// let c = testGreaterOrEqual(20);
// console.log(c);

// // Comparison with the Less Than Operator
// function testLessThan(val) {
//   if (val < 25) {
//     // Change this line
//     return "Under 25";
//   }

//   if (val < 55) {
//     // Change this line
//     return "Under 55";
//   }

//   return "55 or Over";
// }

// let a = testLessThan(0);
// console.log(a);
// let aa = testLessThan(24);
// console.log(aa);
// let b = testLessThan(25);
// console.log(b);
// let bb = testLessThan(54);
// console.log(bb);
// let c = testLessThan(55);
// console.log(c);

// // Comparison with the Less Than Or Equal To Operator
// function testLessOrEqual(val) {
//   if (val <= 12) {
//     // Change this line
//     return "Smaller Than or Equal to 12";
//   }

//   if (val <= 24) {
//     // Change this line
//     return "Smaller Than or Equal to 24";
//   }

//   return "More Than 24";
// }

// let a = testLessOrEqual(12);
// console.log(a);
// let b = testLessOrEqual(24);
// console.log(b);
// let c = testLessOrEqual(55);
// console.log(c);

// // Comparisons with the Logical And Operator
// function testLogicalAnd(val) {
//   // Only change code below this line

//   if (val <= 50 && val >= 25) {
//       return "Yes";
//   }

//   // Only change code above this line
//   return "No";
// }

// let a = testLogicalAnd(30);
// console.log(a);

// Comparisons with the Logical Or Operator
// function testLogicalOr(val) {
//   // Only change code below this line

//   if (val > 20 || val < 10) {
//     return "Outside";
//   }

//   // Only change code above this line
//   return "Inside";
// }

// let a = testLogicalOr(9); // outside
// console.log(a);
// let a10 = testLogicalOr(10); // inside
// console.log(a10);
// let aa = testLogicalOr(20); // inside
// console.log(aa);
// let ab21 = testLogicalOr(21); // outside
// console.log(ab21);
// let ab = testLogicalOr(25); // outside
// console.log(ab);

// // Introducing Else Statements
// function testElse(val) {
//   let result = "";
//   // Only change code below this line

//   if (val > 5) {
//     result = "Bigger than 5";
//   } else {
//     result = "5 or Smaller";
//   }

//   // Only change code above this line
//   return result;
// }

// let a = testElse(5);
// console.log(a);
// let af = testElse(10);
// console.log(af);

// // Introducing Else If Statements
// function testElseIf(val) {
//   if (val > 10) {
//     return "Greater than 10";
//   } else if (val >= 5) {
//     return "Between 5 and 10";
//   } else if(val == 0) {
//     return "Smaller than 5";
//   } else {
//     return "Smaller than 5";
//   }
// }
// let a = testElseIf(10);
// console.log(a);

// // Logical Order in If Else Statements
// function orderMyLogic(val) {
//   if (val == 6) {
//     return "Less than 10";
//   } else if (val < 5) {
//     return "Less than 5";
//   } else {
//     return "Greater than or equal to 10";
//   }
// }

// let a4 = orderMyLogic(4); // Less than 5
// let a6 = orderMyLogic(6); // Less than 10
// let a11 = orderMyLogic(11); //

// console.log(a4);
// console.log(a6);
// console.log(a11);

// Chaining If Else Statements
// function testSize(num) {
//   // Only change code below this line
//     if (num < 5) {
//         return "Tiny";
//     } else if (num < 10) {
//         return "Small";
//     } else if (num < 15) {
//         return "Medium";
//     } else if (num < 20) {
//         return "Large";
//     } else if (num >= 20) {
//         return "Huge"
//     }
//   // Only change code above this line
// }

// let a = testSize(16.2333333);
// console.log(a);

// // Golf Code
// const names = [
//   "Hole-in-one!",
//   "Eagle",
//   "Birdie",
//   "Par",
//   "Bogey",
//   "Double Bogey",
//   "Go Home!",
// ];

// function golfScore(par, strokes) {
//   // Only change code below this line
//   if (par == 4 && strokes == 1) {
//     return names[0];
//   } else if (par == 4 && strokes == 2) {
//     return names[1];
//   } else if (par == 5 && strokes == 2) {
//     return names[1];
//   } else if (par == 4 && strokes == 3) {
//     return names[2];
//   } else if (par == 4 && strokes == 4) {
//     return names[3];
//   } else if (par == 1 && strokes == 1) {
//     return names[0];
//   } else if (par == 5 && strokes == 5) {
//     return names[3];
//   } else if (par == 4 && strokes == 5) {
//     return names[4];
//   } else if (par == 4 && strokes == 6) {
//     return names[5];
//   } else if (par == 4 && strokes == 7) {
//     return names[6];
//   } else if (par == 5 && strokes == 9) {
//     return names[6];
//   }
//   // Only change code above this line
// }

// let holeInOne = golfScore(4, 1);
// console.log(holeInOne);
// let Eage = golfScore(4, 2);
// console.log(Eage);
// let Eage1 = golfScore(5, 2);
// console.log(Eage1);
// let Birdie = golfScore(4, 3);
// console.log(Birdie);
// let Par = golfScore(4, 4);
// console.log(Par);
// let HoleInOne1 = golfScore(1, 1);
// console.log(HoleInOne1);

// // Selecting from Many Options with Switch Statements
// function caseInSwitch(val) {
//   let answer = "";
//   // Only change code below this line
//   switch (val) {
//     case 1:
//       return "alppha";
//       break;
//     case 2:
//       return "beta";
//       break;
//     case 3:
//       return "gamma";
//       break;
//     case 4:
//       return "delta";
//       break;
//   }
//   // Only change code above this line
// }

// let a = caseInSwitch(1);
// console.log(a);

// Adding a Default Option in Switch Statements
// function switchOfStuff(val) {
//   let answer = "";
//   // Only change code below this line
//   switch (val) {
//     case "a":
//       answer = "aple";
//       break;
//     case "b":
//       answer = "bird";
//       break;
//     case "c":
//       answer = "cat";
//       break;
//     default:
//       answer = "stuff";
//       break;
//   }
//   return answer;
//   // Only change code above this line
// }

// let a = switchOfStuff("e");
// console.log(a);

// // Multiple Identical Options in Switch Statements
// function sequentialSizes(val) {
//   let answer = "";
//   // Only change code below this line
//   switch (val) {
//     case 1:
//     case 2:
//     case 3:
//       answer = "Low";
//       break;
//     case 4:
//     case 5:
//     case 6:
//       answer = "Mid";
//       break;
//     case 7:
//     case 8:
//     case 9:
//       answer = "High";
//       break;
//   }
//   // Only change code above this line
//   return answer;
// }

// let a = sequentialSizes(1);
// console.log(a);

// // Replacing If Else Chains with Switch
// function chainToSwitch(val) {
//   let answer = "";
//   // Only change code below this line

//   switch (val) {
//     case "bob":
//       answer = "Marley";
//       break;
//     case 42:
//       answer = "The Answer";
//       break;
//     case 1:
//       answer = "There is no #1";
//       break;
//     case 99:
//       answer = "Missed me by this much!";
//       break;
//     case 7:
//       answer = "Ate Nine";
//       break;
//     case "Jhon":
//       answer = "";
//       break;
//     case 156:
//       answer = "";
//       break;
//   }
//   // Only change code above this line
//   return answer;
// }

// chainToSwitch(7);
