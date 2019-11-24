//-------------------------------------------------------------
var judete: any = '{ "ROU122": "Dolj", "ROU123": "Gorj", "ROU124": "Mehedinti", "ROU126": "Olt",  "ROU127": "Teleorman", ' +
    '"ROU128": "Bucharest", "ROU129": "Calarasi", "ROU130": "Dâmbovita", "ROU131": "Giurgiu", "ROU132": "Ialomita", "ROU133": "Constanta",' +
    '"ROU276": "Arad", "ROU277": "Bihor", "ROU278": "Caras-Severin", "ROU280": "Timis", "ROU287": "Botosani", "ROU294": "Alba",' +
    '"ROU295": "Bistrita-Nasaud", "ROU296": "Cluj", "ROU297": "Hunedoara", "ROU298": "Maramures",  "ROU299": "Mures", "ROU300": "Salaj",' +
    '"ROU301": "Satu Mare", "ROU302": "Arges", "ROU303": "Sibiu", "ROU304": "Vâlcea", "ROU305": "Brasov", "ROU306": "Covasna", "ROU307": "Harghita",' +
    '"ROU308": "Iasi", "ROU309": "Neamt", "ROU310": "Prahova", "ROU311": "Suceava", "ROU312": "Bacau", "ROU313": "Braila",  "ROU314": "Buzau",' +
    '"ROU315": "Galati", "ROU316": "Vaslui", "ROU317": "Vrancea",  "ROU4844": "Ilfov",  "ROU4847": "Tulcea" }';
//-------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {

    var obj = JSON.parse( judete );
    let x = 'ROU295';
    console.log(obj[x]);

    var ev = document.querySelector('#svgid');

    ev.addEventListener('click',function (e) {
        console.log(e.target['id']);
    })



     //var bk = document.querySelector('#block1');
     //var but = document.querySelector('#bt1');
    //
    // but.addEventListener('click',function () {
    //     bk.innerHTML = '';
    //     let p:number =0;
    //     let n:number =20;
    //     for(let i=1; i<=10;i++ ){
    //         let x = Math.round(Math.random()*100);
    //         bk.innerHTML =bk.innerHTML +  x.toString() + '</br>' ;
    //         if (x>0) { p=p+1; }
    //         if (x<0) { n=n+1; }
    //     }
    //
    //     bk.innerHTML += '<br>Положительных:' + p.toString();
    //     bk.innerHTML += '<br>Оттрицательных:' + n.toString();
    //
    // })


});




















//  var bk = document.querySelector('#block1');
//  bk.innerHTML = '<i> Все загуженно </i>' ;
//
//  var b1 = document.querySelector('#bt1');
//  b1.addEventListener('click',  function () {
//  let n:string = prompt('n=', '10');
//  let s:number = 0;
//  for(let i= 1; i<=Number(n); i++){  s = s + i; }
//     bk.innerHTML = '<b>Сумма от </b> 1' + 'до ' + n + ' = ' + s.toString() ;
// })
//
// var b2 = document.querySelector('#b2');
//  b2.addEventListener('click', function () {
//      bk.innerHTML = '<img class="img-responsive"   src="http://lifeglobe.net/media/entry/1329/4910Sky_3.jpg">' ;
//  })
//
//
// //http://lifeglobe.net/media/entry/1329/4910Sky_3.jpg

