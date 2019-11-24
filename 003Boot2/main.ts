    
class elev {
    np:string;
    note:Array<number>=[];
  ///---------------------------  
    constructor(x:string){
       this.np = x;       
       for (let i=1; i<=3; i++){
          let nt = Math.floor(Math.random()*9)+1;
          this.note.push(nt); 
       }       
    }
    ///---------------------------
    getMedia():string{

        let media =
            this.note[0] +
            this.note[1] +
            this.note[2];

        return (media/3).toFixed(2).toString();
    }

}
 var elevi:Array<elev> = [];
 elevi.push(new elev('Popescu Cristian'));
 elevi.push(new elev('Florescu Mihai'));
 elevi.push(new elev('Ionescu Maria'));
 console.log(elevi);

//---------------------------------------
document.addEventListener('DOMContentLoaded', function () {

    //----------------------
    document.querySelector('#b1')
       .addEventListener('click',
           function (){

            let html ='<table class="table">';
            for(let e of elevi){
                html +=
                    '<tr>' +
                    '<td>'+e.np+'</td>'+
                    '<td>'+e.note[0]+'</td>'+
                    '<td>'+e.note[1]+'</td>'+
                    '<td>'+e.note[2]+'</td>'+
                    '<td>'+e.getMedia()+'</td>'+
                    '</tr>';
            }
            html +='</table>';
            document.querySelector('#cnt')
                .innerHTML= html;
                         }
       )
   //-----------------

    //----------------------
    document.querySelector('#b2')
        .addEventListener('click',
            function (){
                alert('Button2');
            }
        )
    //-----------------

    //----------------------
    document.querySelector('#b3')
        .addEventListener('click',
            function (){
                alert('Button3');
            }
        )
    //-----------------


})
//---------------------------------------



