function sayHello(name) {
    return "Hello, " + name;
}

 sayHello("Evan");
 
 function areBothEven(a,b) {
   if (a % 2 === 0 && b % 2 === 0) {
        return true;
    } 
    return false;
 }

 
 function hotOrNot(temp) { if(temp > 75) {
     return "hot";}
      return "not hot";
 }
 function threeIfNull(num) {
     if(num === null) { return 3;}
     return num;
 }
function greatest(x,y,z) {
    if( x > y && x > z) { return x }
      
    else if ( y > x && y > z) { return y }
    else if ( (y > z) && (y > x)) { return y }
    else if ( z > y && z > x) { return z }
    else if ( z > x && z > y) { return z }
    else if ( x > z && x > y) { return x }
}
 hotOrNot(80);
  areBothEven(8,4);
  threeIfNull(4);
  greatest(3,2,5)

function getLargest(a,b,c,d) {
    if (a > b && a > c && a > d) { return a; }
else if ( b > a && b > c && b > d) 
   { return b; }
   else if ( c > a && c > b && c > d) { return c; }
return d;
}

// Broken below :()
function fizzBuzz(num) {
    for ( var i = 1; 1 < num; i+= 1) { 
    if ((i % 3) && (i % 5)) {return 'fizz' }
    else if ( i % 5 && i % 3  ) { return 'buzz' }
    else if ( i % 5 && i % 3) { return 'fizzbuzz'}
    else (i % 5 && i !% 3 ;) { return i ; }
    }
}


//Try iterating through arrays
var old_array = [12,45,6,23,19,20,20,15,30,42];
var new_array = [];
function addFive (value) {
    return value + 5;
}
for (var i = 0; i < old_array.length; i+=1) 
{ new_array.push(addFive(old_array[i])); }

// .Map() example
var x = [5,1,3];


function xby10(y) {
    return 10 + y;
}
var y = x.map(xby10);

var old_array = ['henry','paul', 'greg']
function nameString(value) {
    return value.length;
}
var z = old_array.map(nameString);