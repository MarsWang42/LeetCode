/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    let x = 0,
        y = 0,
        area = (C-A) * (D-B) + (G-E) * (H-F);
    if (A <= E) {
        A = E;
        if (A >= C) x = 0;
        else if (G >= C) x = C-A;
        else x = G-A
    }
    if (E < A) {
        E = A;
        if (E >= G) x = 0;
        else if (C >= G) x = G-E;
        else x = C-E;
    }
    if (D >= H) {
        D = H;
        if (D <= B) y = 0;
        else if (B >= F) y = D-B;
        else y = D-F;
    }
    if (D < H) {
        H = D;
        if (H <= F) y = 0;
        else if (F >= B) y = H-F;
        else y = H-B;
    }
    return area - x*y;
};
