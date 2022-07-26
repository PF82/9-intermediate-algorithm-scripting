// 21-Map the Debris
/*
According to Kepler's Third Law, the orbital period  T  of two point masses orbiting each other in a circular or elliptic orbit is:

T=2πa3μ−−−√
 
a  is the orbit's semi-major axis
μ=GM  is the standard gravitational parameter
G  is the gravitational constant,
M  is the mass of the more massive body.

Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
*/

function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const a = 2 * Math.PI;
    const newArr = [];

    const getOrbPeriod = function (obj) {
        const c = Math.pow(earthRadius + obj.avgAlt, 3);
        const b = Math.sqrt(c / GM);
        const orbPeriod = Math.round(a * b);
        // create new object
        return { name: obj.name, orbitalPeriod: orbPeriod };
    };

    for (let elem in arr) {
        newArr.push(getOrbPeriod(arr[elem]));
    }

    return newArr;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);


console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]))
// document.getElementById("demo").innerHTML ="";

/*
Problem Explanation
The first thing to do is to get familiar with what the program is for by knowing what Orbital period exactly is. You’ve to return 
a new array that transforms the element’s average altitude into their orbital periods. The parts generally found hard are finding the 
formula, implementing it and for some people, modifying objects by the key. However, something that is not very clear is the fact that 
your program has to be able to check for any number of objects in the array; This is what is tested on the second part.

Relevant Links
Orbital period
JS Objects 
Math.PI 
JS Math Pow 
Math.sqrt() 
Math.round() 

Hints
Hint 1
The formula needed is:
image

Hint 2
Use Math.round() to round up to the next whole number as requested. Using Math.ceil() will let you pass the first test but fail the second one.

Hint 3
Find out how to remove and add key to a JavaScript object.

Solution
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const a = 2 * Math.PI;
  const newArr = [];

  const getOrbPeriod = function(obj) {
    const c = Math.pow(earthRadius + obj.avgAlt, 3);
    const b = Math.sqrt(c / GM);
    const orbPeriod = Math.round(a * b);
    // create new object
    return {name: obj.name, orbitalPeriod: orbPeriod};
  };

  for (let elem in arr) {
    newArr.push(getOrbPeriod(arr[elem]));
  }

  return newArr;
}

// test here
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);

Code Explanation
GM and earthRadius are both given to us.
To make the code easier to edit and read, each part of the equation is written separately.
Create newArr to store the orbPeriod's.
a is 2 times pi. The part that is a constant is on the global scope while the rest is part of a function.
Create a function, gerOrbPeriod() that will do the required work for any amount of objects.
c is (earthRadius + avgAlt) to the cube.
b is the square root of c divided by GM.
Create orbPeriod to store the product of a and b, with the Math.round() function applied to round up to the next whole number.
Then we delete the key avgAlt, and add the new key and its value.

Relevant Links
JS For In Loop 
JS Array Prototype Push 
*/