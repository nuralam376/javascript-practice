function stopWatch() {
  var startTime = Date.now();

  function getDelay() {
    console.log(Date.now() - startTime);
  }

  return getDelay;
}

var timer = stopWatch();

for (var i = 0; i < 10000000; i++) {
  var a = Math.random() * 10000000000;
}

timer();

console.dir(timer);

timer = null;
