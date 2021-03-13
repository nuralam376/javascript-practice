const players = [
  {
    name: "Abc",
    avg: 23,
  },
  {
    name: "Def",
    avg: 39,
  },
  {
    name: "Ghi",
    avg: 45,
  },
  {
    name: "Jkl",
    avg: 31,
  },
];

let averages = [];

for (let player = 0; player < players.length; player++) {
  if (players[player].avg > 35) averages.push(players[player]);
}

console.log(averages);

let newPlayers = players.filter((player) => player.avg > 35);

console.log(newPlayers);
