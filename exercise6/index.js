// Initial position
let achilles = 0;
let turtle = 50;

async function run(iteration, stop) {
  if (stop == 10) return;

  // Distance calculation
  iteration = iteration / 2;
  let newAchilles = turtle;
  let newTurtle = turtle + turtle * iteration;

  // "Animation"
  let stepAchilles = (newAchilles - achilles) / 10;
  let stepTurtle = (newTurtle - turtle) / 10;

  for (let i = 0; i < 9; i++) {
    achilles = achilles + stepAchilles;
    turtle = turtle + stepTurtle;
    await new Promise((r) => setTimeout(r, 100));
    console.log(" ".repeat(achilles) + "A");
    console.log(" ".repeat(turtle) + "T");
  }

  // Make sure the final position is exactly the one we calculated
  achilles = newAchilles;
  turtle = newTurtle;

  stop++;

  run(iteration, stop);
}

console.log(run(1, 1));
