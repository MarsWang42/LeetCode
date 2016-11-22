/**
 * @constructor
 */
var Queue = function() {
    this.pusher = [];
    this.popper = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
    this.pusher.push(x);
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
    if (this.popper.length === 0){
        while (this.pusher.length !== 0) {
            this.popper.push(this.pusher.pop());
        }
    }
    return this.popper.pop();
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
    if (this.popper.length !== 0) return this.popper[this.popper.length-1];
    else return this.pusher[0]
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
    return this.popper.length === 0 && this.pusher.length === 0;
};
