// work 1 
const myNum1 = 22,
myname = "luka",
mytrue = true,
myUndefined = undefined,
myNull = null;

console.log(myNum1, myname ,mytrue, myUndefined, myNull);

//work 2 
const myComputerManufacturer = "HP";
const myComputerMemory = "16GB";
const myComputerOS = "windows itel i7";
const computerBuyingYear = 2023;
const currentYear = 2023;
console.log(myComputerManufacturer, myComputerMemory,myComputerOS, computerBuyingYear, currentYear);

//work 3 

let string1 = `my computer is  ${myComputerManufacturer}, it runs on ${myComputerOS}  and I've been using it for  ${
	currentYear - computerBuyingYear } years `;

    console.log(
        	"my computer is " +
    		myComputerManufacturer +
        		", it runs on " +
        		myComputerOS +
        		"  and I've been using it for " +
        		(currentYear - computerBuyingYear) +
        		" years "
         );