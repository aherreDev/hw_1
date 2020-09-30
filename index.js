/**************** /
 * EJERCICIO 1
/ ******************/
let salary = 1450;

if (salary < 0) null
else if( salary <= 1000 ) salary += salary * 0.15
else if( salary <= 1200 ) salary += salary * 0.12
else if( salary <= 1400 ) salary += salary * 0.1
else if( salary <= 1500 ) salary += salary * 0.08
else salary += salary * 0.15

console.log(salary)
