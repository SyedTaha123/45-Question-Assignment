//lower case
var personName = "Taha";
console.log("lowercase:", personName.toLowerCase());
//upper case
var personName = "TAHA";
console.log("uppercase:", personName.toUpperCase());
//Title case
var personName = "Taha";
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
