//EvenOdd
const isEvenOrOdd=function(number){
	if(number%2==0)
		return "Even No.";
	else
		return "Odd No.";
};
console.log(isEvenOrOdd(10));
console.log(isEvenOrOdd(11));

//Square
const squareCalc=function(number){
	return number*number;
};
console.log(squareCalc(25));

//Cube
const cubeCalc=function(number){
	return number*number*number;
};
console.log(cubeCalc(25));

//Hcf
let hcf;
const hcfCalc= function(firstNumber,secondNumber){
	for(let counter=1;counter<=firstNumber && counter<=secondNumber;counter++){
		if (firstNumber%counter==0 && secondNumber%counter==0)
		hcf=counter;
    }
	return hcf;
};
console.log(hcfCalc(15,18));

//LCM
const lcmCalc=function(firstNumber,secondNumber){
              const hcf=hcfCalc(firstNumber,secondNumber);
              return firstNumber*secondNumber/hcf;
};
console.log(lcmCalc(20,18));

//Simple Interest
const simpleIntCalc=function(principleAmount,rate,time){
         return principleAmount*rate*time/100;
};
console.log(simpleIntCalc(3000,7,1));

//Compound Interest
const compoundIntCalc=function(principleAmount,rate,time){
  return principleAmount*((Math.pow((1+rate/100),time)-1)); 
};		

console.log(compoundIntCalc(10000,10.25,5));

//fahrenheit to centigrade converter
const getCentigrade=function(fahrenheitValue){
  return ((fahrenheitValue-32)*5)/9; 
};	
console.log(getCentigrade(54));	


//centigrade to fahrenheit converter

const getFahrenheit=function(centigradeValue){
  return ((centigradeValue*9)/5)+32; 
};	
console.log(getFahrenheit(12));

//largest of three numbers
const getLargestNum=function(firstNumber,secondNumber,thirdNumber){
	if (firstNumber>=secondNumber && firstNumber>= thirdNumber)
		return firstNumber;
	else if (secondNumber>=firstNumber&& secondNumber>=thirdNumber)
		return secondNumber;
	else 
		return thirdNumber;
};
console.log(getLargestNum(11,56,56))


//average of threee numbers
const getAverage=function(firstNumber,secondNumber,thirdNumber){
	return(firstNumber+secondNumber+thirdNumber)/3;
};
console.log	(getAverage(20,10,30));


//Loops

//Factorial
const getFactorial = function(number){
  if(number==0)
    return 1;
  return (number * getFactorial(number - 1));
};
console.log(getFactorial(5));

//Fibonacci
let firstNumber=0;
let secondNumber=1;
let fibNumber;
const fibonacciOf=function(number){
	for (let i = 1; i <= number; i++) {
    console.log(firstNumber);
    fibNumber = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = fibNumber;
	};
};
fibonacciOf(5);

//Print Odd number series
const oddNumberSeries=function(number){
    for(let i=1;i<=number;i++){
    	if (i%2 !==0)
    		console.log(i);
    	};
};
oddNumberSeries(10);

//Print Even number series
const evenNumberSeries=function(number){
    for(let i=1;i<=number;i++){
    	if (i%2 ==0)
    		console.log(i);
    	};
};
evenNumberSeries(10);

//Multiplication table
const tableOf=function(tableOfNumber,number) {
	for(i=1;i<=number;i++){
      console.log(tableOfNumber*i);
	};
};
tableOf(2,20);

//Sum of N numbers
let totSum=0;
const sumOfNumber=function(number){
	for(i=1;i<=number;i++){
      totSum=totSum+i;
	};
	return totSum;
};
console.log(sumOfNumber(5));


//Product of N numbers
let totProduct=1;
const productOfNumber=function(number){
	for(i=1;i<=number;i++){
      totProduct=totProduct*i;
	};
	return totProduct;
};
console.log(productOfNumber(5));


//Print all odd numbers
const betweenOddNumbers=function(firstNumber,lastNumber){
	for(i=firstNumber;i<=lastNumber;i++){
      if (i%2!==0)
		console.log(i)
	};
};

betweenOddNumbers(2,10);

//print any nth number
let counter=0;
const findNthNumber=function(firstNumber,lastNumber,nthNumber){
	for(i=firstNumber;i<=lastNumber;i=i+nthNumber){
	 console.log(i);		
	};
};
findNthNumber(3,15,4);

//sum of all even numbers between two
let totSum =0;
const sumOfEvenNumbers=function(firstNumber,lastNumber){
	for(i=firstNumber;i<=lastNumber;i++){
	  if(i%2==0)
	  totSum=i+totSum;		
	};
	console.log(totSum);
};
sumOfEvenNumbers(1,10);


//Print all odd numbers in reverse order
const reverseOddNumbers=function(number){
	for(i=number;i>=1;i--){
      if (i%2!==0)
		console.log(i)
	};
};

reverseOddNumbers(10);

//Print all denominations of note that make up a amount
let  noteOf1=noteOf5=noteOf10=noteOf50=noteOf100=noteOf200=noteOf500=noteOf2000=0;
const countNotes=function(amount){

	 if(amount >= 2000)
    {
        noteOf2000 = Math.trunc(amount/2000);
        amount -= noteOf2000 * 2000;
    };
	 if(amount >= 500)
    {
        noteOf500 = Math.trunc(amount/500);
        amount -= noteOf500 * 500;
    };
     if(amount >= 200)
    {
        noteOf200 = Math.trunc(amount/200);
        amount -= noteOf200 * 200;
    };
    if(amount >= 100)
    {
        noteOf100 = Math.trunc(amount/100);
        amount -= noteOf100 * 100;
    }
    if(amount >= 50)
    {
        noteOf50 = Math.trunc(amount/50);
        amount -= noteOf50 * 50;
    }
   
    if(amount >= 10)
    {
        noteOf10 = Math.trunc(amount/10);
        amount -= noteOf10 * 10;
    }
    if(amount >= 5)
    {
        noteOf5 = Math.trunc(amount/5);
        amount -= noteOf5 * 5;
    }
  
    if(amount >= 1)
    {
        noteOf1 = amount;
    }
    console.log("2000 X ", noteOf2000);
    console.log("500 X ", noteOf500);
    console.log("200 X ", noteOf200);
    console.log("100 X ", noteOf100);
    console.log("50 X ", noteOf50);
    console.log("10 X ", noteOf10);
    console.log("5 X ", noteOf5);
    console.log("1 X ", noteOf1);
    
    };

countNotes(3867);