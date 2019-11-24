//--------------------------------------
class  Punct{

    public x:number;
    public y:number;
    public c:String;

    constructor(z:number){

        this.x = Math.round((Math.random()>0.5)
               ? Math.random()*100
               : Math.random()*100 *(-1));

        this.y =  Math.round((Math.random()>0.5)
            ? Math.random()*100
            : Math.random()*100 *(-1));

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

/*
 document.addEventListener('DOMContentLoaded', function () {
    const canvas = <HTMLCanvasElement> document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var x0 = 250;
    var y0 = 250;
    var d_max = 150;
    var raza = 1;

    ctx.moveTo(x0 - d_max , y0);
    ctx.lineTo(x0 + d_max, y0);
    
    ctx.moveTo(x0, y0 - d_max);
    ctx.lineTo(x0, y0 + d_max);
    ctx.stroke();

   
    ctx.beginPath();
    a.forEach(elem => {
        ctx.font = "10px Arial";
        ctx.fillText(String(elem.c), x0 + elem.x +1, y0 - elem.y-3);        
        ctx.arc(x0 + elem.x, y0 - elem.y, raza, 0, 2 * Math.PI);
        ctx.stroke();
    });

 })
*/


class sems{
    public x;
    constructor(){
        this.x = Math.round(Math.random()*100)
    }
}
var b:Array<sems> =[];
for (let i=1; i<=7 ; i++){
    let p:sems = new sems();
    b.push(p);

}
console.log(b);
document.addEventListener('DOMContentLoaded', function () {
    const canvas = <HTMLCanvasElement> document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var start = 155;
    var delt = start;
   //linia despartitoare
    ctx.moveTo(50,300);
    ctx.lineTo(450, 300);

    // in loc de functia rect
    ctx.moveTo(100,250);
    ctx.lineTo(100, 100);
    ctx.lineTo(400, 100);
    ctx.lineTo(400, 250);
    ctx.lineTo(100, 250);

    //linia din dreptunghi
    ctx.moveTo(150,225);
    ctx.lineTo(350, 225);
    
    // b.forEach( elem =>{

    //     ctx.fillText("sem   ", delt-8, 225-elem.x-4);
    //     ctx.fillRect(delt, 225-elem.x, 10, elem.x);
    //     delt += 30
    // })
    for(let i=0; i<b.length; i++){
        ctx.fillText("sem "+(i+1), delt-8, 225-b[i].x-4);
        ctx.fillRect(delt, 225-b[i].x, 10, b[i].x);
        delt += 30
    }
    ctx.stroke();








    //----------------------------------------------
       let w = document.querySelector('.clmn');

       let html_text = '<table id="teb" class="table table-bordered"><tr><td>Semestru</td>';

       html_text +='';
        for(let i=0; i<b.length; i++){
            html_text +='<td class="semestru" idiciu="'+ i +'">Sem ' + (i+1)  +'</td>';
        }
        html_text += '</tr><tr><td>Valoarea</td>' 
        for(let i=0; i<b.length; i++){
            html_text +='<td>' + b[i].x  +'</td>';
        }

       html_text +='</tr></table>'

       w.innerHTML = html_text;       
    //----------------------------------------------
    
    let precedent_key = 0;
    let element = document.querySelector('#teb');
    element.addEventListener("click",function(e:any){
        
        var target = e.target;
        var indice = target.getAttribute('idiciu');  
        if (indice != null){
            sc_col(indice);
        }
        function sc_col(indice){
            ctx.fillStyle = "#000";
            ctx.fillRect(precedent_key*30+start, 225-b[precedent_key].x, 10, b[precedent_key].x);

            ctx.fillStyle = "#FF0000";
            ctx.fillRect(indice*30+start, 225-b[indice].x, 10, b[indice].x);
            precedent_key = indice;
        }




   });

  



















