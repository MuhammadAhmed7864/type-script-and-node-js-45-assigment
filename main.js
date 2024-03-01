// Task 17
// part 1
//let guests: string[] = ["AHMED","ASAAD","HIBA","HARAM"]
//console.log("Due to limited seats only two guest are invited for dinner.");
//  part 2
// while (guests.length > 2){
// const removedGuest = guests.pop();
// console.log(`Sorry, ${removedGuest}, you re not longer invited `)
// }   
// part 3
var guests = ["AHMED", "ASAAD",];
// guests.forEach((guest) => {
//   console.log(`Dear ${guest}, you re still invied.`);
//})
guests.pop();
guests.pop();
console.log("Final guest list:", guests);
