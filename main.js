// part 1 Orignal order
var placeToVisit = ["Pakistan", "china", "SaudiArabia", "Phalestine"];
console.log("Orignal order:", placeToVisit);
// part 2 alphabetic order 
console.log("Alphabetical order:", placeToVisit.sort());
// part 3 Orignal order after sorting
console.log("Orignal order after sorting:", placeToVisit);
// part 4 Reverse alphabetical order 
console.log("Reverse alphabetical order:", placeToVisit.sort().reverse());
// part 5 orignal order after reverse sorting 
console.log("Orignal after order sorting:", placeToVisit);
// part 6 reaverse order 
placeToVisit.reverse();
console.log("Reversed order:", placeToVisit);
// part 7 sort the array in alphabetical order 
placeToVisit.sort();
console.log("Sorted in alphabetical order:", placeToVisit);
// part 8 reverse alphabetical order 
placeToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in reverse alphabetical order", placeToVisit);
