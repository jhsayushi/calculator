let result = document.getElementById('result');
const calContainer = document.getElementById('container');

let calci = document.getElementById('calci');


function dis(val){
    result.value += val;

}

function myFunction(event){
    if  (event.key == '0' || event.key == '1' 
    || event.key == '2' || event.key == '3'
    || event.key == '4' || event.key == '5' 
    || event.key == '6' || event.key == '7'
    || event.key == '8' || event.key == '9' 
    || event.key == '+' || event.key == '-'
    || event.key == '*' || event.key == '/')

    result.value += event.key;
    console.log(event.key);
}

function solve() {
    let x = result.value
    let y = math.evaluate(x)
    result.value = y
}


calci.onkeyup = function (event){
    if(event.keycode===13){
        console.log('enter');
        let x = result.value
        console.log(x);
        solve();
    }
}



// Function that clear the display
function clr() {
    result.value = ""
}