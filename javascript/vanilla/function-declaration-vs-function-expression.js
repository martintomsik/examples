/**
 * Function expression vs function declaration.
 */

console.group('Before');
try {
  console.log('Function declaration returns: ', functionDeclaration());
  console.log('Function expression returns: ', functionExpression()); // <= Unlike function declaration,
    // function expression is not yet known at this point. Throwing error.
} catch(error) {
	console.error(error);
}
console.groupEnd();

function functionDeclaration() {
	return 'Function declaration returned!';
}

let functionExpression = function() {
	return 'Function expression returned!'
};

console.group('After');
try {
	console.log('Function declaration returns: ', functionDeclaration());
	console.log('Function expression returns: ', functionExpression());
} catch (error) {
	console.error(error);
}
console.groupEnd();
