/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b) => a.end-b.end);
    let max = -Number.MAX_VALUE, result = 0;
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i].start >= max) {
            max = intervals[i].end;
        }
        else result++;
    }
    return result;
};
