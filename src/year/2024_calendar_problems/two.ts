const two_main = () => {
  console.log("this is from the two file in the 222");
  const data = `
    7 6 4 2 1 
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`

  const array_Numbers = data
    .trim()
    .split("\n")
    .map(line =>
      line
        .trim()
        .split(/\s+/)
        .map(Number)
    );

  const safe = 0;
  const unsafe = 0;
  const least_decreasing = 1;
  const most_increasing = 3;

  for (let i = 0; i < array_Numbers.length; i++) {
    const another_array = array_Numbers[i]
    // console.log(another_array);

    if (another_array) {
      for (let i2 = 0; i2 < another_array.length; i2++) {
        const level = another_array[i2]
        const level_infront = another_array[i2 + 1]

        if (level && level_infront) {
          const difference = level_infront - level;
          const absoluteValue = Math.abs(difference)

          if (absoluteValue > most_increasing) {
            console.log(level, level_infront);
          }
          console.log("End of a report\n");

        }
      }

    }
  }

}


export default two_main;

