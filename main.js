var guestArr = ["Hiba", "ASAAD", "SOHAIL"];
var canNotAttend = "ASAAD";
var newGuest = "Haram";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
// console.log(guestArr)
// guestArr.map((items) =>
// console.log(`dear ${items} I FOUND a big dinner party tonight I AM INVITED MORE PEOPLE.`)
// );
// part 2 guest Began
var Guestbeg = "AHMED";
guestArr.unshift(Guestbeg);
// console.log(guestArr)
// part 3 guest Middle
var middelGuest = "HUSSAIN";
var middleindex = guestArr.length / 3;
guestArr.splice(middleindex, 0, middelGuest);
// console.log(guestArr);
// part 4 append
guestArr.push("farheen");
console.log(guestArr);
// part 5
guestArr.map((function (items) {
    return console.log("dear ".concat(items, " you are invited it the more people list of dinner"));
}));
