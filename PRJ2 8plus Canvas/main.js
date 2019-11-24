//--------------------------------------
var Punct = /** @class */ (function () {
    function Punct(z) {
        this.x = (Math.random() > 0.5)
            ? Math.random() * 100
            : Math.random() * 100 * (-1);
        this.y = (Math.random() > 0.5)
            ? Math.random() * 100
            : Math.random() * 100 * (-1);
        this.c = String.fromCharCode(65 + z - 1);
    }
    //intoarce distanta pina la origine
    Punct.prototype.getDist = function () {
        return Math.sqrt(Math.pow(this.x, 2) +
            Math.pow(this.y, 2));
    };
    //intoarce numarul cadranului
    Punct.prototype.getNumCadran = function () {
        if (this.x > 0 && this.y > 0)
            return 'I';
        if (this.x < 0 && this.y > 0)
            return 'II';
        if (this.x < 0 && this.y < 0)
            return 'III';
        if (this.x > 0 && this.y < 0)
            return 'IV';
        if (this.x === 0 || this.y === 0)
            return 'axa';
    };
    return Punct;
}());
//--------------------------------------
var a = [];
for (var i = 1; i <= 5; i++) {
    var p = new Punct(i);
    a.push(p);
}
console.log(a);
/*
for (let p of a){

    console.log(
        p.x.toFixed(2) +
        ':'+
        p.y.toFixed(2) +
        '->'+
        p.getNumCadran()
    );

}
*/
document.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var x0 = 250;
    var y0 = 250;
    var d_max = 250;
    var raza = 10;
    ctx.moveTo(x0 - d_max, y0);
    ctx.lineTo(x0 + d_max, y0);
    ctx.moveTo(x0, y0 - d_max);
    ctx.lineTo(x0, y0 + d_max);
    ctx.stroke();
    ctx.beginPath();
    for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
        var p = a_1[_i];
        var xp = x0 + p.x;
        var yp = y0 + p.y;
        ctx.moveTo(xp, yp);
        ctx.arc(xp, yp, raza, 0, 2 * Math.PI);
        ctx.fillText(xp, yp, xp + 3, yp - 3);
        ctx.stroke();
    }
    for (var i = 0; i <= a.length - 2; i++) {
        var p1 = a[i];
        var p2 = a[i + 1];
        ctx.moveTo(x0 + p1.x, y0 + p1.y - d_max);
        ctx.lineTo(x0 + p2.x, y0 + p2.y - d_max);
    }
});
