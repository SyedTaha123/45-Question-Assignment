//Question 30: Hello Admin: Greet users differently, especially 'admin'.
//


let users :string [ ] = ["admin","aliyan","moiz","zahoor","ajmal"]

for(let user of users) {
   if(user ==="admin") {
    console.log("Hello admin, would you like to see a status reports?") 
} else {
    console.log (`Hello ${user},thank you for logging in again`)
}
