function getOdds(array) {
  console.log(array.filter(num => num % 2 == 1));
}

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
getOdds(myArray);