//  IIFE (Immediately Invoked Function Expression).

// Variation 1.
(function() {
		var variation = 'Variation 1';
    console.log("I am an IIFE, " + variation + ".");
}());

// Variation 2.
(function() {
		var variation = 'Variation 2';
    console.log("I am an IIFE, " + variation + ".");
})();

// Returning values with/from IIFE.
var result = (function() {
    return "Returned from IIFE :)";
}());

console.log(result);

// IIFE with parameters.
(function IIFE(msg, times) {
    for (var i = 1; i <= times; i++) {
        console.log(msg);
    }
}("IIFE with parameters.", 3));

// Use $ for jQuery and global for window.
jQuery =  null;
(function($, global, document) {
    // ...
}(jQuery, window, document));
