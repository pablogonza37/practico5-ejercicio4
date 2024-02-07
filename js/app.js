const fechaHoy = document.querySelector("#fecha");
const tiempo = document.getElementById("tiempo");
const segundosActual = document.getElementById("segundos");
const amPm = document.getElementById("amPm");

function reloj() {
  const fecha = new Date();
  const diaSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  const mesesAnio = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const dia = diaSemana[fecha.getDay()];
  const mes = mesesAnio[fecha.getMonth()];

  fechaHoy.innerHTML = `${dia} ${fecha.getDate()} de ${mes} de ${fecha.getFullYear()}`;

  const horas = fecha.getHours();
  const minutos = fecha.getMinutes();
  const segundo = fecha.getSeconds();

  tiempo.innerHTML = formatoTiempo(horas) + ":" + formatoTiempo(minutos) + ":";

  segundosActual.innerHTML = formatoTiempo(segundo);

  formatoAmPm(horas);
}

function formatoAmPm(hora) {
  if (hora < 12) {
    amPm.innerHTML = "AM";
  } else {
    amPm.innerHTML = "PM";
  }
}

function formatoTiempo(time) {
  return time < 10 ? "0" + time : time;
}
reloj();
setInterval(reloj, 1000);
