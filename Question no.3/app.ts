//Name Cases: store a person's name in a variable, and then print  that  persons in lowercase, uppercase, and titlecase.  


//lower case
let personName: string ="Taha"
console.log("lowercase:",personName.toLowerCase());

//upper case
let personName: string ="TAHA"
console.log("uppercase:",personName.toUpperCase());

//Title case
let personName: string = "Taha"
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));