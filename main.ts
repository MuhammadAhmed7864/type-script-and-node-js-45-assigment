let users : string [] = ["admin","eric","ahmed","asaad","hiba",] 

for(let user of users) {
    if (user === "admin") {
    console.log("Hello admin, would you like to see a status report?")
}  else  {
    console.log (`Hello ${users}, thank you for logging in again `)
}
} 