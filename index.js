
window.addEventListener('load', function(){
    var tarjeta = document.querySelector('.tarjeta__interior');

    tarjeta.addEventListener('click', function(){
        tarjeta.classList.toggle('volteada');
    })
})

function calcularEdad(){
    var fechaNacimiento = new Date("02/02/2003");
    var month_diff = Date.now() - fechaNacimiento.getTime();
    var age_dt = new Date(month_diff);
    var anoNacimiento = age_dt.getUTCFullYear();
    var edad = Math.abs(anoNacimiento - 1970);

    document.write(edad);
}

function link(){
    document.getElementById("check").checked = false;
}

