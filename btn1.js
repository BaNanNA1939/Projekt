console.log('Hello World!');

const code = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

let qrImg = document.getElementById("qrImg");
let qrBox = document.getElementById("qrBox");
let input = document.getElementById("input");
let clear = document.getElementById("clear");

clear.onclick = function (){
  console.log('Clearing..');
  input.value = '';
  setTimeout(() => {
  qrBox.style.display = "none";
}, 1000)
  
}

function generateQr(){
  console.log('Accesing server....');
  setTimeout(() => {
    qrBox.style.display = "flex";
  }, 1000)
  if (input.value.length>0) {
    console.log('Generating....');
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
    qrBox.classList.add('show');
  } 
  else {
    console.log('No value found...');
    console.log('Generating default...')
    qrImg.src = code + "https://bananna1939.github.io/Projekt/";
    qrBox.classList.add('show');
  }
  console.log('Input value: ' + qrImg.src);
}