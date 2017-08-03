var timeStr,dataStr;
function clock() {
    now = new Date();
    // время
    hours = now.getHours();
    minutes =now.getMinutes();
    seconds = now.getSeconds();
    timeStr = "+ hours";
    timeStr+=((minutes <10) ? ":0" : ":")+minutes;
    timeStr+=((seconds <10) ? ":0" : ":")+seconds;
    document.clocl.time.value = timeStr;
    //Data
    date = now.getDate();
    month = now.getMonth()+1;
    year = 1900 + now.getYear();
    dataStr ="" + month;
    dataStr += ((date<10) ? "/0" : "/") +date;
    dateStr += "/" + year;
    document.clock.date.value =dateStr;
    Timer = settimeout("clock()",1000);
}


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
    var x= document.getElementById("myTopnav");
    if(x.className === "topnav") {
        x.className +=" responsive"
    }else {
        x.className = "topnav";
    }
}