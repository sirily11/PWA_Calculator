const operations = ["sum", "sub", "div", "mul"];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

class NodeObj {
    constructor(value) {
        if (numbers.includes(value)) {
            value = parseInt(value);
        }
        this.value = value;
        this.child = [];
    }

    getValue() {
        return this.value;
    }

    addChild(children) {
        this.child.push(children);
        return true;
    }

    getChild() {
        return this.child;
    }

    calculate(firstValue) {
        var result = firstValue;
        var resultForMul = firstValue;
        var count = 0;
        for (i of this.child) {
            if(count == 0){
                count++;
                continue;
            }
            var value = i.getValue();
            if (operations.includes(value)) {
                try{
                value = i.calculate(i.getChild()[0].getValue());
                }catch(err){
                    continue;
                }
                value
            }
            if (this.value == "mul") {
                resultForMul *= value;
            }
            if (this.value == "sum") {
                result += value;
            }
            if (this.value == "div") {
                resultForMul /= value;
            }
            if (this.value == "sub") {
                result -= value;
            }
            count++;

        }
        if (this.value == "mul" || this.value == "div") {
            return resultForMul;
        } else {
            result
            return result;
        }
    }

    printOnScreen(firstValue){
        var returnStr = "";
        var count = 0;
        for (i of this.child) {
            if(count == 0){
                firstValue
                returnStr += "(" + firstValue;
                count++;
                continue;
            }
            var value = i.getValue();
            if (operations.includes(value)) {
                try{
                value = i.printOnScreen(i.getChild()[0].getValue());
                }catch(err){
                    continue;
                }
            }
            
            if (this.value == "mul") {
                returnStr += "*";
            }
            if (this.value == "sum") {
                returnStr += "+";
            }
            if (this.value == "div") {
                returnStr += "/";
            }
            if (this.value == "sub") {
                returnStr += "-";
            }
            returnStr += value;
            count++;
        }
        returnStr += ")"
        return returnStr;
    }
}


function get() {
    console.log("Click");
    var expression = document.getElementById("myExpression").value;
    //var expression = "mul 6 sub 4 sum 7 3 4"
    var token = expression.split(" ");
    var result = calculate(token);
    var func = printOnScreen(token);
    document.getElementById("output").innerHTML = "Answer: " + result;
    document.getElementById("function").innerHTML = "Function: " + func;
    document.getElementById("token").innerHTML = "Token: " + token
}

function evalToken(token){
    var returnToken = [];
    for(a of token){
        if(a != ""){
            returnToken.push(a);
        }else{
            continue;
        }
    }
    return returnToken;
}

function calculate(token) {
    token = evalToken(token);
    token
    var firstNode = null;
    var count = 0;
    var operationNode = null;
    for (i of token) {
        var node = new NodeObj(i);
        if (operations.includes(i)) {
            if (count > 0) {
                operationNode.addChild(node);
            }
            operationNode = node;

        } else {
            operationNode.addChild(node);
            operationNode
        }
        if (count == 0) {
            firstNode = node;
        }
        count++;
    }
    return firstNode.calculate(firstNode.getChild()[0].getValue());
}

function printOnScreen(token) {
    token = evalToken(token);
    token
    var firstNode = null;
    var count = 0;
    var operationNode = null;
    for (i of token) {

        var node = new NodeObj(i);
        if (operations.includes(i)) {
            if (count > 0) {
                operationNode.addChild(node);
            }
            operationNode = node;

        } else {
            operationNode.addChild(node);
            operationNode
        }
        if (count == 0) {
            firstNode = node;
        }
        count++;
    }
    return firstNode.printOnScreen(firstNode.getChild()[0].getValue());
}
// var expression = "sum 6 mul 2 4 div 2 3"
// var token = expression.split(" ");
// var result = printOnScreen(token);
// result

