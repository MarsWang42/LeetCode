/**
 * @constructor
 */
var Stack = function() {
    this.pusher = [];
    this.popper = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {
    this.pusher.push(x);
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function() {
    this.popper = []
    while (this.pusher.length > 1) {
        this.popper.push(this.pusher.shift());
    }
    this.pusher = this.popper
};

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
    return this.pusher[this.pusher.length-1]
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
    return this.pusher.length === 0;
};
