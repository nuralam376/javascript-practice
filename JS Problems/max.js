var abc = 450;
var def = 350;
var ghi = 990;

if (abc > def && abc > ghi) {
	console.log("Abc is bigger");
} else if (def > ghi) {
	console.log("Def is bigger");
} else {
	console.log("Ghi is bigger");
}

console.log(Math.max(abc, def, ghi));
