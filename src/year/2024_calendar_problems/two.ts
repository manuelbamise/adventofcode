const two_main = () => {
  console.log("this is from the two file in the 222");
  const data = `
    7 6 4 2 1 
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`

  const result = data
    .trim()
    .split("\n")
    .map(line =>
      line
        .trim()
        .split(/\s+/)
        .map(Number)
    );


}


export default two_main;

