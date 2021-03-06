// Nested functions.

function ageInYear(yearInFuture) {
	return function(yearOfBirth) {
		return yearInFuture - yearOfBirth;
	}
}

// Call option #1.
let yearInFutureJohn = ageInYear(2078);
console.log("Jonh's age in year 2078 (#1): ", yearInFutureJohn(1978));

// Call option #2.
console.log("Jonh's age in year 2078 (#2): ", ageInYear(2078)(1978));

// Call option #1.
let yearInFutureJane = ageInYear(2000);
console.log("Jane's age in year 2000 (#1): ", yearInFutureJane(1980));

// Call option #2.
console.log("Jane's age in year 2000 (#2): ", ageInYear(2000)(1980));
