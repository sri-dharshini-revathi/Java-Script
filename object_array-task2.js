const data = [ "Sri Dharshini",  "John", "Doe"];


function myFunction() {
  const result = data.map(currentValue =>{
    return {
    firstName: currentValue,
    age: 21,
}; 
  });

console.log("",result);
}
myFunction();

