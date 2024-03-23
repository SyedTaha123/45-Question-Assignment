function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("sandwich order;");
    for (var i = 0; ; i++) {
        console.log(" = ".concat(items[i]));
    }
}
console.log("I love club sandwich");
sandwich('tikka', 'malaiboti', 'beef');
sandwich('mayo source', 'chiken', 'tomato');
sandwich('kabab', 'olives', 'chiken');
