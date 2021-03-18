let object = {};

object.name = "JavaScript";
object.estd = 1995;

object[Symbol("founder")] = "Brendan Eich";

console.log(object);

for (let key in object) {
  console.log(key);
}

console.log(Object.keys(object));
