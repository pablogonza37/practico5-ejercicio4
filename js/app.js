const fechaHoy = document.querySelector('#fecha');
const hora = document.querySelector('#hora');
const minutos = document.querySelector('#minutos');
const segundos = document.querySelector('#segundos');
const amPm = document.querySelector('#amPm');

const reloj = () =>{

const fecha = new Date();
const diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
const mesesAnio = [
    "Enero", "Febrero", "Marzo", "Abril",
    "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

const dia = diaSemana[fecha.getDay()];
const mes = mesesAnio[fecha.getMonth()]

fechaHoy.innerHTML = (`${dia} ${fecha.getDate()} de ${mes} de ${fecha.getFullYear()}`);

if (fecha.getHours() <= 9){
hora.innerHTML = `'0'${fecha.getHours()} :`;
}else{
    hora.innerHTML = `${fecha.getHours()} :`;
}

if(fecha.getMinutes() <= 9){
minutos.innerHTML = `0${fecha.getMinutes()} :`;
}else{
    minutos.innerHTML = `${fecha.getMinutes()} :`;
}

if(fecha.getSeconds() <= 9){
segundos.innerHTML = `0${fecha.getSeconds()}`;
}else{
    segundos.innerHTML = `${fecha.getSeconds()}`;
}

if (fecha.getHours() <= 12){
    amPm.innerHTML = 'AM'
}else{
    amPm.innerHTML = 'PM'
}
}

reloj();

setInterval(reloj, 1000);