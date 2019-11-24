

//console.log('salut');

//vector sursa
var a:Array<Number> = [];

/*
* 1. Generat valori aliatoare intre [-50;50]
* */
let v:Number;
for (let i=1; i<=30; i++ ){
    v =  Math.round(Math.random()*50);
    v *= (Math.random()>0.5) ? -1 : 1;
    a.push(v);

}
console.log(a);


/*
* 2. Filtarea valorilor pozitive
* */
/*var b = a.filter(function (elm){
    return elm>0;
});*/

var b = a.filter( elm => elm > 0);

console.log(b);

/*
 *  3. Cautarea indexului primului element 20
 *  */
var ns = prompt("n=",'20');
let n = Number(ns);
let index:number = a.lastIndexOf(n);
let msg:string =
    (index !== -1)
        ? index.toString()
        : 'NU exista';

console.log('valoare '+ ns+':'+msg);

/*
 *  4.
 * a = a.map( function (elm:number){
 return elm + 2
 } );
 *
 *
 *  */
b = a.map( (elm:number) => {
      return elm + 2
    } );
console.log(b);

/*
* 5. sortarea elementelor vectorului
*

b = a.sort(function(a,b){
    if (a > b) {return -1;}
    if (a < b ) {return 1;}
    return 0;
});
 */

b = a.sort( (a,b) =>{
    if (a > b) {return -1;}
    if (a < b ) {return 1;}
    return 0;
});
console.log(b);




