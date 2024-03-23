var current_users = ["admin", "aliyan", "moiz", "zahoor", "ajmal"];
var new_users = ["admin", "ali", "moin", "zahid", "najam"];
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log('sorry ${new_user}, that name is taken');
    }
    else {
        console.log('yes ${new_user}, is still in avaliable list');
    }
}
