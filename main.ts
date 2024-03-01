let current_users : string [] = ["admin","Ahmed","Asaad","Hiba","sohail"]
let new_users : string [] = ["admin","sohail","Hussain","Faisal","Iqbal"]

let current_users_lower : string [] = current_users.map(user => user.toLowerCase())


for (let new_user of new_users) {
    if (current_users_lower.includes (new_user.toLowerCase())) {
        console.log(`Soory ${new_user}, that name is taken`)
    } else {
        console.log(`Yes ${new_user}, is still avaliable list`)
    }
} 
 