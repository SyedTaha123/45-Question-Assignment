//Stripping Nmaes: Store a persons name, and include some whitespace characters at the beginning and end of the name, make sure you use each character combination, "\t" and "\n", at least once. print the name once, so the whitespace around the name is displayed, then print the  name after stripping whites pace.       


let personName =`\n\t TAHA NAEEM\t\n`;
console.log(personName);
let stripped: string = personName.trim();
console.log(stripped);