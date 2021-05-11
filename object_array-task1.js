const data = [ "Sri Dharshini",  "John", "Doe"];



function myFunction() {
  const result = data.map(currentValue => {
    return "User "+currentValue;
  });
console.log(result);      
}
myFunction();
