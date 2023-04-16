/*var nombre = 'Tu Nombre'
console.log(nombre)

var a = 1;
console.log(a);

var b = 2;
var c = a + b;
console.log(c);*/

//1.pasar de horas a segundos
//var horas = 2;
//var segundos = horas * 3600;
//console.log(segundos);

//2.pasar de grados celcius a fahrenheit
//var grados_celcius = 30;
//var grados_f = grados celcius * 9/5 + 32;
 

var nota = 'A';

/*switch (nota) {
    case 'A':
        console.log('muy bien exelente');
        break;
    case 'B':
        console.log('bien');
        break;
    case 'C':
        console.log('mmm mas o menos :s');
        break
    default:
        console.log('no se que decir');
}*/

var num = 1;

  while (num <= 100) {
      num++;

      if (num == 50) {
          continue;
      }

      console.log(num);
  }

  console.log('se acaba la iteracion');
  console.log('el valor final de num es:' + num);