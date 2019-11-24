//console.log('Salut');

var a:Array<number>=[]; //vector sursa

let  v:number;
for (let i=1; i<=30; i++){
    v =Math.round(Math.random()*50);
    v*=(Math.random()>5)? -1 : 1;
    a.push(v);
}

var b=a.filter(elem=> elem>0)
    console.log(a);
    console.log(b);

//filtrarea  punctelor pozitive

//cautarea indexului primului element 20
let index: number= a.lastIndexOf(20);
let msg.toString=(index !== -1)?  a.toString(): 'NU exista';
    console.log(msg);

//
a= a.map(elem=> elem> 10)
console.log(a);