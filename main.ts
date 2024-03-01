let guestArr : string [] = ["AHMED","ASAAD","SOHAIL"];
let canNotAttend : string = "AHMED"
// console.log(canNotAttend + " " "can not attend dinner");
let newGuest : string = "hiba"
guestArr [guestArr.indexOf(canNotAttend)] = newGuest;
// console.log(guestArr);
guestArr.map((items)=>(console.log(`dear ${items}, you are invited to the dknner.`)) )




