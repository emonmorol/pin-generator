function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const pin = getPin();
    const pinInput = document.getElementById('pin-container');
    pinInput.value = pin;
}

document.getElementById('key-pad').addEventListener('click',function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else{

        const perviousNumber = calcInput.value;
        const newNumber = perviousNumber + number;
        calcInput.value = newNumber;
    }
})

function verifyPin(){
    const pin = document.getElementById('pin-container').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successPop = document.getElementById('pin-success');
    const failError = document.getElementById('pin-fail');
    if( pin == typedNumbers){
        successPop.style.display = 'block';
        failError.style.display = 'none';
    }
    else {
        failError.style.display = 'block';
        successPop.style.display = 'none';
    }
}