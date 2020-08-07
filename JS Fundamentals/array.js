var friendsAge = [14, 17, 19, 11];

console.log(friendsAge);

console.log(friendsAge[2]);

friendsAge[1] = 29;

console.log(friendsAge);

var position = friendsAge.indexOf(19);

console.log(position);

position = friendsAge.indexOf(191);

console.log(position);

friendsAge.push(28);
friendsAge.push(39);

console.log(friendsAge);

friendsAge.pop();

console.log(friendsAge);
