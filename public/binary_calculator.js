
var a = "";
var b = "";
var operation = "";
var memory = ""

function input(e) {
    var display = document.getElementById("display").innerHTML;
    if (typeof e == "number" || (e == '-' && display == "") || e == ".") {
        if (operation == "") {
            a = a + e.toString();
            document.getElementById("display").innerHTML = a;
        } else {
            b = b + e.toString();
            document.getElementById("display").innerHTML = b;
        }
    } else {
        if (e == "~") {
            if (b == "") {
                a = inverse(a).toString(2);
                
                document.getElementById("display").innerHTML = a;
                console.log(a);
            } else {
                a = inverse(b).toString(2);
                b = "";
                document.getElementById("display").innerHTML = a;
            }
            return;
        }

        if (e == "=") {
            var result = calculate(parseInt(a, 2), parseInt(b, 2), operation).toString(2);
            document.getElementById("display").innerHTML = result;
            a = result;
            b = ""
            return;
        }
        if (e == "c") {
            clear();
            return;
        }
        operation = e;
        document.getElementById("display").innerHTML = b;
    }
}

function calculate(numA, numB, operation) {
    if (operation == '+') {
        console.log(numA);
        return numA + numB;
    }
    if (operation == '-') {
        return numA - numB;
    }
    if (operation == '*') {
        return numA * numB;
    }
    if (operation == '/') {
        return numA / numB;
    }
    if (operation == '%') {
        return numA % numB;
    }
    if (operation == '&') {
        return numA & numB;
    }
    if (operation == '|') {
        return numA | numB;
    }
    if (operation == '<<') {
        return numA << numB;
    }
    if (operation == '>>') {
        return numA >> numB;
    }
}

function inverse(numA){
    var returnStr = ""
    for(var x = 0; x < numA.length;x++){
        var c = numA.charAt(x);
        if(c == '0'){
            c = '1';
        }else{
            c = '0';
        }
        returnStr += c;
    }
    return returnStr;
}

function clear() {
    console.log(a, b);
    document.getElementById("display").innerHTML = "";
    if (b == "") {
        a = "";
    }
    b = "";
}

function clearAll() {
    a = "";
    b = ""
    operation = "";
    document.getElementById("display").innerHTML = "";
}

function mr() {
    document.getElementById("display").innerHTML = memory;
}

function mMinus() {
    var data = document.getElementById("display").innerHTML;
    memory = calculate(memory, data, "-");
    console.log("Memory is:" + memory);
}

function mPlus() {
    var data = document.getElementById("display").innerHTML;
    memory = calculate(memory, data, "+");
    console.log("Memory is:" + memory);
}

function mc() {
    memory = "";
    console.log("Memory is:" + memory);
}
