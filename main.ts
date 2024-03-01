let guestArr : string [] = ["Hiba","ASAAD","SOHAIL"];

let canNotAttend : string = "ASAAD"

let newGuest : string = "Haram"

guestArr [guestArr.indexOf(canNotAttend)] = newGuest;
// console.log(guestArr)

// guestArr.map((items) =>
// console.log(`dear ${items} I FOUND a big dinner party tonight I AM INVITED MORE PEOPLE.`)
// );

// part 2 guest Began
let Guestbeg : string = "AHMED"
guestArr.unshift(Guestbeg);
// console.log(guestArr)

// part 3 guest Middle
let middelGuest : string = "HUSSAIN"
let middleindex = guestArr.length/3
guestArr.splice(middleindex,0,middelGuest);
// console.log(guestArr);

// part 4 append
guestArr.push("farheen")
console.log(guestArr)

// part 5
guestArr.map((items =>
console.log(`dear ${items} you are invited it the more people list of dinner`));
