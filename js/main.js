let moneda1 = prompt('Ingrese moneda a convertir: USD, ARS');
let cantidad = Number(prompt('Ingrese cantidad'));
let moneda2 = prompt('Ingrese moneda destino: USD, ARS');

let dolarapeso = 189.94;
let pesoadolar = 0.0053;

function convertir() {

if (moneda1 == 'USD' && moneda2 == 'ARS') {
    let resultado = dolarapeso * cantidad;
    alert(resultado);
}
else if (moneda1 == 'ARS' && moneda2 == 'USD') {
    let resultado = pesoadolar * cantidad;
    alert(resultado);
}
else if (moneda1 == 'USD' && moneda2 == 'USD') {
    let resultado = cantidad;
    alert(resultado);
}
else if (moneda1 == 'ARS' && moneda2 == 'ARS') {
    let resultado = cantidad;
    alert(resultado);
}
}

convertir();

function edadPromedio() {

let cantidadPersonas = Number(prompt('Ingrese cantidad de personas a registrar'));
let edadPersonas;
let acumuladorEdad = 0;
let i;

for (i=1;i<=cantidadPersonas;i++) {
    edadPersonas = Number(prompt('Ingrese la edad de la persona '+i));
    acumuladorEdad = acumuladorEdad + edadPersonas;
}

alert('La edad promedio de las '+cantidadPersonas+' es: '+parseInt(acumuladorEdad/edadPersonas))
}

edadPromedio()