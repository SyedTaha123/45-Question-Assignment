//Question 32: Checking Usernames: Ensure uniqueness in usernames.
//Explain & TIP: Checking for uniqueness is crucial in user management. Use loops and conditionals to handle case-insensitive comparisons.

let current_users : string [] = ["admin","aliyan","moiz","zahoor","ajmal"]
let new_users : string [] = ["admin","ali","moin","zahid","najam"]

let current_users_lower : string [] =current_users.map(user => user.toLowerCase())

for (let new_user of new_users){
    if (current_users_lower.includes (new_user.toLowerCase())){
        console.log('sorry ${new_user}, that name is taken')
    } else {
        console.log('yes ${new_user}, is still in avaliable list')
    }
}