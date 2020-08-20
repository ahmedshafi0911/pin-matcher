document.getElementById('didNotMatch').style.display = 'none'
document.getElementById('matched').style.display = 'none'


function generatePinClickHandler(){
    document.getElementById('generateBtn').style.backgroundColor = '#57626d'

    const generateInput = document.getElementById('generateInput')
    const randomPin = Math.floor(1000 + Math.random() * 9000);
    generateInput.value = randomPin
}


function numberClickHandler(Btn){
    const btn = document.getElementById(Btn)
    const btnNumber = parseInt(btn.innerText)

    const inputBox = document.getElementById('inputBox').value
    document.getElementById('inputBox').value = inputBox + btnNumber;
}
function allClearHandler(){
    document.getElementById('inputBox').value = ''
}
function backSpaceHandler(){
    const inputBox = document.getElementById('inputBox'), deleteLastInput = inputBox.value;
    inputBox.value = deleteLastInput.substring(0, deleteLastInput.length - 1);
}


function pinSubmit(){
    const generateInput = document.getElementById('generateInput').value
    const inputBox = document.getElementById('inputBox').value

    if(inputBox == '' || generateInput == ''){
        alert('No Input Available')
    }
    else{
        if(generateInput == inputBox){
            document.getElementById('matched').style.display = 'block'
            document.getElementById('didNotMatch').style.display = 'none'
            document.getElementById('generateInput').value = ''
            document.getElementById('inputBox').value = ''
            document.getElementById('generateBtn').style.backgroundColor = '#57626d'    
        }
        else{
            document.getElementById('matched').style.display = 'none'
            document.getElementById('didNotMatch').style.display = 'block'
        }

    }
}
