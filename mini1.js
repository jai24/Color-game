

var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
var d = document.getElementsByClassName('click')[0];
var c = document.getElementById('source');
var color = document.getElementById('color');
var inc = document.getElementById('num');
var reset = document.getElementById('reset');
var move = document.getElementById('move');

let i = 0;

d.addEventListener('click', function () {
    let a = '#'
    i++;
    for (let i = 0; i < 6; i++) {
        a += adding();
    }
    c.innerHTML = a;
    color.style.backgroundColor = a;
    inc.innerHTML = i;
    
})

reset.addEventListener('click',function(){
    inc.innerHTML =0;
})
function adding() { //function to generate randon number

    let rand = Math.floor(Math.random() * 16);
    return num[rand];
}