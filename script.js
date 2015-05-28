//001 =============================================================

var e1 = function () {
	var n = parseInt(document.getElementById("inputNum").value);
	var result = 0;
		for (var i = 0; i < n; i++){
			if(i % 3 === 0){
			result += i;
		}
		else if(i % 5 === 0){
			result += i;
		}
	}
	document.getElementById("result").innerHTML = result.toString();
};

//002 =============================================================

var e2 = function() {
	
	var n = parseInt(document.getElementById("inputNum").value);
	var result = 0;
	var a = 1;
	var b = 2;
	var ans = 2;

	for(var i = 0; i < n; i++){
		result = a + b;
		
		a = b;
		b = result;

		if(result % 2 === 0){
			ans += result;
		}
		if(result > 4000000){
			ans="limit exceeded";
			break;
		}
	}

	document.getElementById("result").innerHTML = ans.toString();
};

//003 =============================================================
// Solved this problem for numbers but it takes about an hour to run
// this code for the number presented (600851475143). Will have to
// come back to this later to solve for speed. 

var e3 = function(){

	var n = parseInt(document.getElementById("inputNum").value);
	// var to hold comparer
	var x = Math.floor(n / 2);
	var result = 0;
	//function to return true if input is prime
	var isPrime = function(a){
		//if a is 2 or 3 return true
		if(a === 2 || a === 3)
			return true;
		//if a divides evenly by 2 or 3 or is 1 return false
		if( a % 2 === 0 || a % 3 === 0 || a <= 1)
			return false;
		//set b to half a's value minus the remainder
		var b = Math.ceil(a / 2);
		//cycle down from that number seeing if it divides evenly into original a
		while(b >= 5){
			//if b divides into a return false
			if(a % b  === 0)
				return false;
			//subtract 1 from b and try again
			b--;
		}
		return true;
	};
	//run isPrime() of every number below n that are factors
	while(x > 1){
		//only check the numbers for primality if they are factors of n
		if(n % x === 0){
			if(isPrime(x) === true){
				result = x;
				break;
			}
		}

		x--;
	}
	document.getElementById("result").innerHTML = result.toString();
};

//004 =============================================================

var e4 = function(){

	var n1 = parseInt(document.getElementById("inputNum").value);
	var result = 0;
	var n2 = 0;
	var s1 = "";
	var s2 = "";

	//takes n1 and builds a string of 9's with number n1
	var buildString = function(a){
  		var s = "";
  		for(var i = 0; i < a; i++){
    		s += "9";
  		}
  		return s;
	};

	//takes string and returns reverse of it
	var revString = function(s){
  		var rs = "";
  		for(var i = s.length; i > 0; i--){
    		rs += s[i-1];
  		}
  		return rs;
	};

	//take user input and build string of 9's
	s1 = buildString(n1);
	//make that string a number
	n1 = parseInt(s1);
	//run model
	n2 = n1;
	//vars to run n1 and n2 through the while loop without 
	//forgetting the original number
	var x1 = n1;
	var x2 = n2;

	while(n1 > 0){
  		console.log("n1: " + n1 + " n2: " + n2);
  		s1 = (n1 * n2).toString();
  		s2 = revString(s1);
  		//if string matches
  		if(s1 === s2){
   			result = s1;
  			break;
  		}      
  		n2--;
  		console.log("n1: " + n1 + " n2: " + n2);
  		s1 = (n1 * n2).toString();
  		s2 = revString(s1);
  		//if string matches
  		if(s1 === s2){
   			result = s1;
  		break;
  		} 
  		n1--;
  
	}

/*
	while(x1 > 0){
   		while(x2 > 0){
   			console.log("x1: " + x1 + " " + "x2: " + x2);
   			//convert the product of x1 and x2 to a string
   			s1 = (x1 * x2).toString();
   			//reverse the string and see if it is the same as the original
   			s2 = revString(s1);
   			//if it is then break out of the loop and set that to result
   			if(s1 === s2){
   				result = s1;
   			}
     		x2 -= 1;
   		}
   		x2 = n2;
   		x1 -= 1;
   		break;
   		result = "no element found";
	}
*/


	document.getElementById("result").innerHTML = result;

};
	// tested loop model to iterate over two numbers 
// var inter = function(x1, x2){
// 	var n1 = x1;
// 	var n2 = x2;

// 	while(n1 > 0){
//   			while(n2 > 0){
//     		console.log("n1: " + n1 + " " + "n2: " + n2);
//     		n2 -= 1;
//   		}
//   		n2 = 9;
//   		n1 -= 1;
// 	}
// };
// //005 =============================================================


// var e5 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };
// //006 =============================================================

// var e6 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //007 =============================================================

// var e7 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //008 =============================================================

// var e8 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //009 =============================================================

// var e9 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //010 =============================================================

// var e10 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //011 =============================================================

// var e11 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //012 =============================================================

// var e12 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //013 =============================================================

// var e13 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //014 =============================================================

// var e14 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //015 =============================================================

// var e15 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //016 =============================================================

// var e16 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //017 =============================================================

// var e17 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //018 =============================================================

// var e18 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //019 =============================================================

// var e19 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //020 =============================================================

// var e20 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //021 =============================================================

// var e21 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //022 =============================================================

// var e22 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //023 =============================================================

// var e23 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //024 =============================================================

// var e24 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //025 =============================================================

// var e25 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //026 =============================================================

// var e26 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //027 =============================================================

// var e27 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //028 =============================================================

// var e28 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //029 =============================================================

// var e29 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //030 =============================================================

// var e30 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //031 =============================================================

// var e31 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //032 =============================================================

// var e32 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //033 =============================================================

// var e33 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //034 =============================================================

// var e34 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //035 =============================================================

// var e35 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //036 =============================================================

// var e36 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //037 =============================================================

// var e37 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //038 =============================================================

// var e38 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //039 =============================================================

// var e39 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //040 =============================================================

// var e40 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //041 =============================================================

// var e41 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //042 =============================================================

// var e42 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //043 =============================================================

// var e43 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //044 =============================================================

// var e44 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //045 =============================================================

// var e45 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //046 =============================================================

// var e46 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //047 =============================================================

// var e47 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //048 =============================================================

// var e48 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //049 =============================================================

// var e49 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };

// //050 =============================================================

// var e50 = function(){

// 	var n = parseInt(document.getElementById("inputNum").value);
// 	var result = 0;

// 	//...

// 	document.getElementById("result").innerHTML = result.toString();

// };
