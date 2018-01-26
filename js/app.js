// Pedimos al usuario la acción que desea realizar.
let btnCipher = document.querySelector('.btn-cifrado');
let btnDecipher = document.querySelector('.btn-descifrado');
let clear = document.querySelector('.clear');
let decipherClear = document.querySelector('.clear3');



// Cifrado.
btnCipher.addEventListener('click', () => {
  let inputCipher = document.querySelector('.cipher');
  let boxCipher = document.querySelector('.box-result-c p');
  let textCipher = inputCipher.value;

  if (textCipher || /[a-zA-Z\s]/g.test(textCipher)) {
    var codeCipher = '';
    for (let i = 0; i < textCipher.length; i++) {
      let convertLetter = textCipher.charCodeAt(i); // Obtenemos el número equivalente en ASCII.
      if (convertLetter >= 65 && convertLetter <= 90) { // Si es mayúsculas continuará asi
        let newNumber = (convertLetter - 65 + 33) % 26 + 65; // Fórmula que transforma la mayúscula en su equivalente 33 posiciones hacia la derecha.
        let newLetter = String.fromCharCode(newNumber); // El número equivalente lo traduce a letra.
        codeCipher += newLetter; // Esto pushea la letra mayúscula codificada al array 'arr'.
      }
      if (convertLetter >= 97 && convertLetter <= 122) { // Si es minúscula continuará asi.
        let newNumber2 = (convertLetter - 97 + 33) % 26 + 97; // Fórmula que transforma la mayúscula en su equivalente 33 posiciones hacia la derecha.
        let newLetter2 = String.fromCharCode(newNumber2); // El número equivalente lo traduce a letra.
        codeCipher += newLetter2; // Esto pushea la letra minúscula codificada al array 'arr'.
      }
      if (convertLetter == 32) { // Si es un espacio devuelve un espacio. 32 en ASCII equivale a un espacio.
        let space = ' ';
        codeCipher += space;
      }
    }
  } else {
    alert('Ingresa un mensaje');
  }
  boxCipher.textContent = codeCipher;
});


// Descifrado.
btnDecipher.addEventListener('click', () => {
  let inputDecipher = document.querySelector('.decipher');
  let boxDecipher = document.querySelector('.box-result-desc p');
  let textDecipher = inputDecipher.value;

  if (textDecipher || /[a-zA-Z\s]/g.test(textDecipher)) {
    var codeDecipher = '';
    for (let i = 0; i < textDecipher.length; i++) {
      let convertLetter = textDecipher.charCodeAt(i); // Obtenemos el número equivalente en ASCII.
      if (convertLetter >= 65 && convertLetter <= 90) { // Si es mayúsculas continuará asi
        let newNumber = (convertLetter + 65 - 33) % 26 + 65; // Fórmula que transforma la mayúscula en su equivalente 33 posiciones hacia la derecha.
        let newLetter = String.fromCharCode(newNumber); // El número equivalente lo traduce a letra.
        codeDecipher += newLetter; // Esto pushea la letra mayúscula codificada al array 'arr'.
      }
      if (convertLetter >= 97 && convertLetter <= 122) { // Si es minúscula continuará asi.
        let newNumber3 = (convertLetter + 97 - 45) % 26 + 97; // Fórmula que transforma la mayúscula en su equivalente 33 posiciones hacia la derecha.
        let newLetter3 = String.fromCharCode(newNumber3); // El número equivalente lo traduce a letra.
        codeDecipher += newLetter3; // Esto pushea la letra minúscula codificada al array 'arr'.
      }
      if (convertLetter == 32) { // Si es un espacio devuelve un espacio. 32 en ASCII equivale a un espacio.
        let space = ' ';
        codeDecipher += space;
      }
    }
  } else {
    alert('Ingresa un mensaje');
  }
  boxDecipher.textContent = codeDecipher;
});


// Limpiando box.
let clearBox = () => {
  let inputCipher = document.querySelector('.cipher');
  let boxCipher = document.querySelector('.box-result-c p');
  let inputDecipher = document.querySelector('.decipher');
  let boxDecipher = document.querySelector('.box-result-desc p');

  inputDecipher.value = '';
  inputCipher.value = '';
  boxCipher.textContent = '';
  boxDecipher.textContent = '';
};

clear.addEventListener('click', clearBox);
decipherClear.addEventListener('click', clearBox);

