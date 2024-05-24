// Task 1:
type XYTuple = [number, number];

const XY: XYTuple = [12, 39];
const XY_Wrong: XYTuple = [12, 39, 20];

// Task 2:
// Spread operator
type NameAgeHobbyTuple = [string, number, string, ...string[]];
const NameAgeHobby: NameAgeHobbyTuple = ["Anny", 25, "Surfing", "Test"];
const NameAgeHobby_Wrong: NameAgeHobbyTuple = ["Anny", 25];


export { };
