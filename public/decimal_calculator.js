
var a = "";
var b = "";
var operation = "";
var memory = ""

function input(e) {
    var display = document.getElementById("display").innerHTML;
    if (typeof e == "number" || (e =='-'&&display == "") || e == ".") {
        if (operation == "") {
            a = a + e.toString() ;
            document.getElementById("display").innerHTML = a;
        }else{
            b = b + e.toString();
            document.getElementById("display").innerHTML = b;
        }
    } else {
        if(a ==""){
            return;
        }
        if(e == "="){
            var result = calculate(Number(a),Number(b),operation);
            document.getElementById("display").innerHTML = result;
            a = result;
            b = ""
            return;
        }
        if(e == "c"){
            clear();
            return;
        }
        operation = e;
        document.getElementById("display").innerHTML = b;
    }
}

function calculate(numA,numB,operation){
    if(operation == '+'){
        return (numA*10 + numB*10)/10;
    }
    if(operation == '-'){
        return numA - numB;
    }
    if(operation == '*'){
        return numA * numB;
    }
    if(operation == '/'){
        return numA / numB;
    }
}

function clear(){
    console.log(a,b);
    document.getElementById("display").innerHTML = "";
    if(b == ""){
        a = "";
    }
    b = "";
    operation = "";
}

function clearAll(){
    a = "";
    b = ""
    operation = "";
    document.getElementById("display").innerHTML = "";
}

function mr(){
    document.getElementById("display").innerHTML = memory;
}

function mMinus(){
    var data = document.getElementById("display").innerHTML;
    memory = calculate(memory,data,"-");
    console.log("Memory is:" + memory);
}

function mPlus(){
    var data = document.getElementById("display").innerHTML;
    memory = calculate(memory,data,"+");
    console.log("Memory is:" + memory);
}

function mc(){
    memory = "";
    console.log("Memory is:" + memory);
}
