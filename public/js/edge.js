// Some variables for reuse, others may do this differently
var p0x, p1x, p2x, p3x, ix,
    p0y, p1y, p2y, p3y, iy,
    collisionDetected;

// do stuff, call other functions, set endpoints...

// note: for my purpose I use |t| < |d| as opposed to
// |t| <= |d| which is equivalent to 0 <= t < 1 rather than
// 0 <= t <= 1 as in Gavin's answer - results may vary

var lineSegmentIntersection = function(){
    var d, dx1, dx2, dx3, dy1, dy2, dy3, s, t;

    dx1 = p1x - p0x;      dy1 = p1y - p0y;
    dx2 = p3x - p2x;      dy2 = p3y - p2y;
    dx3 = p0x - p2x;      dy3 = p0y - p2y;

    collisionDetected = 0;

    d = dx1 * dy2 - dx2 * dy1;

    if(d !== 0){
        s = dx1 * dy3 - dx3 * dy1;
        if((s <= 0 && d < 0 && s >= d) || (s >= 0 && d > 0 && s <= d)){
            t = dx2 * dy3 - dx3 * dy2;
            if((t <= 0 && d < 0 && t > d) || (t >= 0 && d > 0 && t < d)){
                t = t / d;
                collisionDetected = 1;
                ix = p0x + t * dx1;
                iy = p0y + t * dy1;
            }
        }
    }
};