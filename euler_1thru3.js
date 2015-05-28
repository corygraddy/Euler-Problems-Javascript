//Euler Problem #1: Multiples of 3 and 5

/*var num = parseInt(prompt("Enter Number"));
var result = 0;

var ep1 = function(n){
	
	for(var i = 0; i < n; i++){
		if(i % 3 === 0){
			result += i;
		}
		else if(i % 5 === 0){
			result += i;
		}
	}

	console.log(result);

};

ep1(num);*/

//Euler Problem #2: Even Fibonacci numbers

var num = parseInt(prompt("Enter Number"));
var r = 2;
var p1 = 1, p2 = 2;

var ep2 = function(n){

	for(var i = 0; i < n; i++){

		if(i === p1 + p2){

			if(i % 2 === 0){
				r += i;
			}

			p1 = p2;
			p2 = r;
		}

	}

	console.log(r);

};

ep2(num);





//Euler Problem #3: