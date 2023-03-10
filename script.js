//Array is equal to 7 elements 
const fruits = ["apple","pear","orange","banana","pineapple","kiwi","grape"]
//create a javacript function that takes two parameters
const arrayOfFruits = function(array,num){
// use of if statements/conditions that should be met for the code to run.
 if(array === null || num === null)   
      return "Your input should be ('array','number'), please try again.";           
    if(num < 0) //check if the number that entered is greater than 0;                                 
      return "Please enter a positive value for num";

    if(num > array.length)  //check if the number that entered is greater than the array length;
      return "We only have " + array.length + " items. Please try again.";

    return array.slice(0, num);                                                     
    
}
console.log(arrayOfFruits(fruits, -1));     
console.log(arrayOfFruits(fruits, 7));
console.log(arrayOfFruits(fruits, 3))

