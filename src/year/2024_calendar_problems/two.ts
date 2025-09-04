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

  let safe = 0;
  let unsafe = 0;
  const least_decreasing = 1;
  const most_increasing = 3;

  const check_another_array = (a: number[]): number => {
    for (let l = 0; l < a.length; l++) {
      const lev = a[l]
      const lev_front = a[l + 1]

      if (lev_front && lev) {
        // console.log(lev, lev_front);
        const absolute_value = Math.abs(lev_front - lev)
        console.log(lev, lev_front, absolute_value);

        if (absolute_value > most_increasing || absolute_value < least_decreasing) {
          safe++;
        }
        unsafe++;
      }
    }
    return 1;
  }

  for (let i = 0; i < array_Numbers.length; i++) {
    const reports = array_Numbers[i]
    if (reports) {
      console.log(reports);
      safe = 0;
      unsafe = 0;

      const levels = check_another_array(reports)


    }
    console.log(safe, unsafe);

  }

}


export default two_main;

