const javascript = {
  name: "JavaScript",
  libraries: ["React", "Vue", "Angular"],
  printLibraries: function () {
    console.log(this);
    var self = this;
    this.libraries.forEach(function (library) {
      console.log(`${self.name} has ${library}`);
    });
  },
};

javascript.printLibraries();

const js = {
  name: "JS",
  libraries: ["React", "Vue", "Angular"],
  printLibraries: function () {
    this.libraries.forEach((library) =>
      console.log(`${this.name} loves ${library}`)
    );
  },
};

js.printLibraries();
