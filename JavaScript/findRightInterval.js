/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
    let hash = new Map(),
        len = intervals.length,
        result = new Array(len);
    for (let i = 0; i < len; i++) {
        hash.set(intervals[i], i);
    }
    intervals.sort((a, b) => (a.start - b.start || a.end - b.end));
    for (let i = 0; i < len; i++) {
        let cur = intervals[i];
        let min = 0, max = len-1, mid;
        while (min < max) {
            mid = Math.floor(min+max);
            if (intervals[mid].start > cur.end) max = mid-1;
            else if (intervals[mid].start < cur.end) min = mid+1;
            else {
                result[hash.get(cur)] = hash.get(intervals[mid]);
                break;
            }
        }
        if (min >= max) result[hash.get(cur)] = -1;
    }
    return result;
};
