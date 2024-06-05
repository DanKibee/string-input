let inputstring = () => {
  let stringField = document.getElementById("input");
  let input = stringField.value;

  if (typeof input !== "string") {
    document.getElementById("result").innerHTML = "please type a string";
  }
  const pairs = [];
  for (let i = 0; i < input.length; i += 2) {
    const firstChar = input[i];
    const secondChar = input[i + 1] || "_";
    pairs.push(firstChar + secondChar);
      document.getElementById("result").innerHTML = pairs;
      
  }
};
