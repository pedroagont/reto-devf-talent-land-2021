// RETO ENTRADAS TALENT LAND 2021
// Se acerca uno de nuestros eventos favoritos, Talent Land 2021, en su primer edición 100% digital y tenemos boletos gratis para ustedes.
// Las primeras 40 personas que respondan correctamente estas 5 preguntas serán quienes se llevan las entradas.
// ✅ 1- ¿Cuáles son nuestras 4 escuelas?
// ✅ 2- ¿Cómo se llamó el primer lenguaje de programación en la historia?
// ✅ 3 -¿Cuánto tiempo tomó crear la primera versión de javascript?
// ✅ 4 - Escribe una función que tome una cadena de palabras en minúsculas y la regrese en mayusculas.
//  Entrada: [“hola”,“como”,“estas”]
//  Salida: [“HOLA”,“COMO”,“ESTAS”]
// ✅ 5 - A partir de esta lista [1, 3, 5, 7, 9], multiplicar todos los elementos por 7, y después sólo traer los que son menores a 30.
// Envía tus respuestas a hola@devf.mx con el título “Quiero ganar los boletos para Talent Land”.
// En el correo debes incluir tu nombre completo, teléfono, ciudad y país en la que te encuentras.
// Conoce más sobre el evento aquí -> https://www.talent-land.mx/en/home/.

// RESPUESTAS
// 1- ¿Cuáles son nuestras 4 escuelas?
// -Desarrollo de Software
// -Data Science
// -Diseño UX/UI
// -Marketing Digital

// 2 - ¿Cómo se llamó el primer lenguaje de programación en la historia?
// -Plankalkül (1943), diseñado, pero sin implementar durante medio siglo
// -FORTRAN (1955), creado por John Backus.

// 3 -¿Cuánto tiempo tomó crear la primera versión de javascript?
// -Cuando Netscape contrató a Brendan Eich en abril de 1995, se le dijo que tenía 10 días para crear y producir un prototipo funcional de un lenguaje de programación que se ejecutara en el navegador de Netscape.

// 4 - Escribe una función que tome una cadena de palabras en minúsculas y la regrese en mayusculas.
//  Entrada: [“hola”,“como”,“estas”]
//  Salida: [“HOLA”,“COMO”,“ESTAS”]

// Función si recibimos únicamente una cadena
function cadenaMinusToMayus(cadena){
  return cadena.toUpperCase();
}
const respuestaCadena = cadenaMinusToMayus('hola');
console.log(respuestaCadena);

// Función si recibimos un arreglo de cadenas
function arregloCadenasMinusToMayus(arreglo){
  return arreglo.map(cadena => cadena.toUpperCase());
}
const respuestaArreglo = arregloCadenasMinusToMayus(['hola','como','estas'])
console.log(respuestaArreglo);

// 5 - A partir de esta lista [1, 3, 5, 7, 9], multiplicar todos los elementos por 7, y después sólo traer los que son menores a 30.
function multiplicarPor7FiltrarMenoresDe30(arreglo){
  const arregloMultiplicado = arreglo.map(elemento => elemento*7)
  const arregloFiltrado = arregloMultiplicado.filter(elemento => elemento < 30);
  return arregloFiltrado;
}

const respuestaMultiplicacion7Menores30 = multiplicarPor7FiltrarMenoresDe30([1, 3, 5, 7, 9]);
console.log(respuestaMultiplicacion7Menores30);
