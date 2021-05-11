const data = ["10%", 1000, "20%", 2000];



const myFunction=() => {
  const percentage = data.filter(item => isNaN(item));
const number = data.filter(item => !isNaN(item)); 
console.log(percentage)
console.log(number)
}
myFunction();
