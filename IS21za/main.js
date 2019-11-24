//console.log("salut")
/*
 1.am generat valori aliatoare intre -50 si 50
 */
var a = []; //vector sursa
var v;
for (var i = 1; i <= 30; i++) {
    v = Math.round(Math.random() * 50);
    v *= (Math.random() > 0.5) ? -1 : 1;
    a.push(v);
}
console.log(a);
/*
 2.filtrarea valorilor pozitive
 */
/*
 var b = a.filter(function(elm){
 return elm >0});
 */
var b = a.filter(function (elm) { return elm > 0; });
console.log(b);
/*
 3.returneaza indexu numarului 20
 */
//if (id < 0) console.log("nu exista") else console.log(id);
var index = a.indexOf(20);
var msg = (index == -1) ? "Nu exisata" : index.toString();
console.log(msg);
/*
 4.masiv cu valoare el + 2
 */
var arr = a.map(function (elm) { return elm + 2; });
console.log(arr);
/*
 5.sortarea descrescator
 */
var st = a.sort(function (a, b) {
    if (a > b) {
        return -1;
    }
    if (a < b) {
        return 1;
    }
    return 0;
});
console.log(st);
/*
 6.media
 */
var reducer = function (accumulator, currentValue) { return accumulator + currentValue; };
console.log(a.reduce(reducer) / 30);
/*
 7.suma preminimal cu premaximal
 */
var suma = st[1] + st[28];
console.log(suma);
