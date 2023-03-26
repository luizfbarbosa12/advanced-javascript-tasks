//First I have to calculate where to start dropping the eggs. Then, I'll use linear search to start dropping the eggs from each x-1 floors.
//To calculate de best floor to start dropping the eggs from, I'll calculate the square root of 2 * number of floors, which in this case is 100.

function findBreakingHeight(numFloors) {
    let optimalHeight = Math.ceil(Math.sqrt(2 * numFloors));
    let firstEgg = optimalHeight;
    let secondEgg = optimalHeight - 1;
    let drops = 0;
  
    while (firstEgg <= numFloors) {
      drops++;
      if (breaks(firstEgg)) {
        return `The highest floor an egg can be dropped from without breaking is ${secondEgg}. It took ${drops} drops to find the answer.`;
      }
      secondEgg = firstEgg;
      firstEgg  += optimalHeight + (drops - 1);
    }
  
    return `The highest floor an egg can be dropped from without breaking is ${numFloors}. It took ${drops} drops to find the answer.`;
  }
  
  // Helper function to simulate the egg breaking. Still kinda thinking if it should be >= or >
  function breaks(floor) {
    const breakingFloor = 42
    return floor >= breakingFloor;
  }
  
  console.log(findBreakingHeight(100)); // Example usage with 100 floors
//   Math.floor(Math.random() * 100) + 1;