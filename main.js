var guestArr = ["AHMED", "ASAAD", "SOHAIL"];
var canNotAttend = "AHMED";
// console.log(canNotAttend + " " "can not attend dinner");
var newGuest = "hiba";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
// console.log(guestArr);
guestArr.map(function (items) { return (console.log("dear ".concat(items, ", you are invited to the dknner."))); });
