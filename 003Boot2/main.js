var elev = /** @class */ (function () {
    ///---------------------------  
    function elev(x) {
        this.note = [];
        this.np = x;
        for (var i = 1; i <= 3; i++) {
            var nt = Math.floor(Math.random() * 9) + 1;
            this.note.push(nt);
        }
    }
    ///---------------------------
    elev.prototype.getMedia = function () {
        var media = this.note[0] +
            this.note[1] +
            this.note[2];
        return (media / 3).toFixed(2).toString();
    };
    return elev;
}());
var elevi = [];
elevi.push(new elev('Popescu Cristian'));
elevi.push(new elev('Florescu Mihai'));
elevi.push(new elev('Ionescu Maria'));
console.log(elevi);
//---------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    //----------------------
    document.querySelector('#b1')
        .addEventListener('click', function () {
        var html = '<table class="table">';
        for (var _i = 0, elevi_1 = elevi; _i < elevi_1.length; _i++) {
            var e = elevi_1[_i];
            html +=
                '<tr>' +
                    '<td>' + e.np + '</td>' +
                    '<td>' + e.note[0] + '</td>' +
                    '<td>' + e.note[1] + '</td>' +
                    '<td>' + e.note[2] + '</td>' +
                    '<td>' + e.getMedia() + '</td>' +
                    '</tr>';
        }
        html += '</table>';
        document.querySelector('#cnt')
            .innerHTML = html;
    });
    //-----------------
    //----------------------
    document.querySelector('#b2')
        .addEventListener('click', function () {
        alert('Button2');
    });
    //-----------------
    //----------------------
    document.querySelector('#b3')
        .addEventListener('click', function () {
        alert('Button3');
    });
    //-----------------
});
//---------------------------------------
