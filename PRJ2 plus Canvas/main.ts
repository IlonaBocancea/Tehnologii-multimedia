//--------------------------------------
class  Punct{

    public x:number;
    public y:number;
    public c:String;

    constructor(z:number){

        this.x = (Math.random()>0.5)
               ? Math.random()*100
               : Math.random()*100 *(-1);

        this.y = (Math.random()>0.5)
            ? Math.random()*100
            : Math.random()*100 *(-1);

        this.c = String.fromCharCode(65 + z -1);
    }

    //intoarce distanta pina la origine
    getDist() : number {
      return Math.sqrt(
          Math.pow(this.x,2) +
          Math.pow(this.y,2)
      );
    }

    //intoarce numarul cadranului
    getNumCadran(): string {
        if (this.x>0 && this.y >0 ) return 'I';
        if (this.x<0 && this.y >0 ) return 'II';
        if (this.x<0 && this.y <0 ) return 'III';
        if (this.x>0 && this.y <0 ) return 'IV';
        if (this.x === 0  || this.y === 0 ) return 'axa';
    }

}
//--------------------------------------
var a:Array<Punct> =[];
for (let i=1; i<=5 ; i++){
    let p:Punct = new Punct(i);
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
     const canvas = <HTMLCanvasElement> document.getElementById("myCanvas");
     var ctx = canvas.getContext("2d");

     var x0 = 250;
     var y0 = 250
     var d_max = 250;
     var raza = 10;


     ctx.moveTo(x0 - d_max ,y0);
     ctx.lineTo(x0 + d_max ,y0);
     ctx.moveTo(x0, y0 - d_max);
     ctx.lineTo(x0, y0 + d_max);
     ctx.stroke();

     ctx.beginPath();
     for (let p of a){
         let xp = x0 + p.x;
         let yp = y0 + p.y;
         ctx.moveTo(xp,yp);
         ctx.arc(xp, yp, raza, 0, 2 * Math.PI);
         ctx.fillText(xp, yp, xp + 3, yp - 3);
         ctx.stroke();
     }

     for (let i =0; i<=a.length-2; i++)
     {
         let p1:Punct = a[i];
         let p2:Punct = a[i+1];
         ctx.moveTo(x0 + p1.x, y0 + p1.y - d_max);
         ctx.lineTo(x0 + p2.x, y0 + p2.y - d_max);
     }

 })
