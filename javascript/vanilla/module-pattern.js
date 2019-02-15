// Module pattern.

let Sequence = (function sequenceIIFE() {

    // Private variable to store current counter value.
    let current = 0;

    // Object that's returned from the IIFE.
    return {
        getCurrentValue: function() {
            return current;
        },

        getNextValue: function() {
            current = current + 1;
            return current;
        }
    };

}());

console.log(Sequence.getNextValue()); // 1
console.log(Sequence.getNextValue()); // 2
console.log(Sequence.getCurrentValue()); // 2
