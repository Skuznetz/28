function fun1() {
    var rtl = document.getElementById('rtl').value;
    var rtr = document.getElementById('rtr').value;
    var rbl = document.getElementById('rbl').value;
    var rbr = document.getElementById('rbr').value;
    var ttl = document.getElementById('ttl');
    var ttr = document.getElementById('ttr');
    var tbr = document.getElementById('tbr');
    var tbl = document.getElementById('tbl');


    var block = document.getElementById('block');


    ttl.value = rtl;
    ttr.value = rtr;
    tbr.value = rbr;
    tbl.value = rbl;
    block.style.borderRadius = rtl + 'px ' + rtr + 'px ' + rbr + 'px ' + rbl + 'px ';
}

function move() {
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 10);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            document.getElementById("label").innerHTML = width * 1 + '%';
        }
    }
}

function myMove() {
    var elem = document.getElementById("myAnimation");
    var pos = 0;
    var id = setInterval(frame, 10);


    function frame() {
        if (pos == 150) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

function moneyConverter(valNum) {
    document.getElementById("outputrub").innerHTML = valNum * 60;
}

function plus() {
    var num1, num2, resalt;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    resalt = num1 + num2;
    document.getElementById('out').innerHTML = resalt;
}

function minus() {
    var num1, num2, resalt;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    resalt = num1 - num2;
    document.getElementById('out').innerHTML = resalt;
}

function um() {
    var num1, num2, resalt;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    resalt = num1 * num2;
    document.getElementById('out').innerHTML = resalt;
}

function del() {
    var num1, num2, resalt;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    resalt = num1 / num2;
    document.getElementById('out').innerHTML = resalt;
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive"
    } else {
        x.className = "topnav";

    }
}

document.getElementById('nav').onmouseover = function(event) {
    var target = event.target;
    if (target.className == 'menu-item') {
        var s = target.getElementsByClassName('submenu');
        closeMenu();
        s[0].style.display = 'block';
    }
}
document.onmouseover = function(event) {
    var target = event.target;
    console.log(event.target);
    if (target.className != 'menu-item' && target.className != 'submenu') {
        closeMenu();
    }
}

function closeMenu() {
    var menu = document.getElementById('nav');
    var subm = document.getElementsByClassName('submenu');
    for (var i = 0; i < subm.length; i++) {
        subm[i].style.display = "none";
    }
}

function myFunction() {
    var x = document.getElementById('myDiv');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
var close = document.getElementsByClassName("closebtn");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.opacity = "0";
        setTimeout(function() {
            div.style.display = "none";
        }, 600);
    }
}

var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}