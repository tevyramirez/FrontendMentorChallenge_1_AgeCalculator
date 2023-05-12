
function calcularEdad(fecha) {
    var hoy = new Date();  // Obtiene la fecha actual
    var cumpleanos = new Date(fecha);  // Convierte la fecha de nacimiento en un objeto Date
    var anhos = hoy.getFullYear() - cumpleanos.getFullYear();  // Calcula la diferencia de años

    var meses = hoy.getMonth() - cumpleanos.getMonth();  // Calcula la diferencia de meses
    var dias = hoy.getDate() - cumpleanos.getDate();  // Calcula la diferencia de días

    // Ajusta la edad si aún no ha pasado el cumpleaños en el mes actual
    if (meses < 0 || (meses === 0 && dias < 0)) {
        anhos--;
        meses += 12;  // Ajusta los meses para que estén en el rango de 0 a 11
    }

    // Ajusta los días si aún no ha pasado el cumpleaños en el mes actual
    if (dias < 0) {
        // Obtiene el último día del mes anterior al mes actual
        var ultimoDiaMesAnterior = new Date(hoy.getFullYear(), hoy.getMonth(), 0).getDate();
        dias += ultimoDiaMesAnterior;  // Ajusta los días para que estén en el rango válido
        meses--;  // Reduce un mes debido al ajuste de días
    }


    document.getElementById("years").innerHTML = anhos;
    document.getElementById("months").innerHTML = meses;
    document.getElementById("days").innerHTML = dias;
    
}

var day= document.getElementById("day");
var month= document.getElementById("month");
var year= document.getElementById("year");


var buttonSubmit= document.getElementById("buttonSubmit");

buttonSubmit.addEventListener("click", function(){
    var fecha = year.value + "-" + month.value + "-" + day.value;
    var edad = calcularEdad(fecha);
  
});