
//Given input array
var numbers = [10,8,12,36];
document.write(`Input array: ${numbers}`);
document.write("<br>---------------------------<br>");

//Double the values using map function in array
var doubles = numbers.map(function (x) {
    return x * 2;
    });
document.write(`Double array: ${doubles}`);
document.write("<br>-------------------------------<br>");

//Filter the values greater then 20 using filter function in array
var filtereddouble = doubles.filter(function (double){
    return double > 20;
});
document.write(`Filtered array: ${filtereddouble}`);
document.write("<br>-------------------------------<br>");

//Calculate the sum of filtered array using reduce function in array
var total = filtereddouble.reduce(function (sum, value) {
    return sum + value;
    }, 0);
document.write(`Sum of filtered array: ${total}`);