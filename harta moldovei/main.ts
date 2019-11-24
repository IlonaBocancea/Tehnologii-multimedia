/**
 * Created by Admin on 2018-10-16.
 */
document.addEventListener("DOMContentLoaded", function () {
    var ev = document.querySelector('#svgid');
    let anim:boolean = false;
    document.querySelector("#MD-BA").classList.add("balti");
    var lista:Array<string> = ["MD-DR","MD-RI","MD-GL","MD-FA","MD-SI"]
    lista.forEach(e => {
        //console.log(e);
        document.querySelector("#"+e).classList.add("r_l");
    });
});