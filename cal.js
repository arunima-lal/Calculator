
//for digits
function displayValue(num){
    //resut is the id of input tag
    result.value += num;
}

//for operators
function operator(val) {
    const InputValue = document.getElementById("result");
        const operators = ['+', '-', '*', '/'];
        const lastChar = result.value.slice(-1);
        var newText = result.value + val;

        if (operators.includes(val) && operators.includes(lastChar)) {
          return;
        }
        result.value = newText;
      }

//for AC
function Allclear(num){
    result.value = " ";
}

// For DE
function DltLast( ){
    result.value = result.value.slice(0,-1);
    // or
    // result.value = result.value.substring(0,result.value.length-1);
}

//for = operations
function evalAnswer( ){
    result.value = eval(result.value);
}