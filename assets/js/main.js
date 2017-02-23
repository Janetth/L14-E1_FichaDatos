
enviar.onclick = function() {
    var mostrar = document.getElementById('mostrar');
    var enviar = document.getElementById('enviar');
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var dni = document.getElementById('dni').value;
    var direc = document.getElementById('direc').value;
    var form1 = document.getElementsByName('form1')[0];
    if (nombre!="" && apellido!=""&& dni!="" && direc!=""){
    mostrar.innerHTML = "<ul><li>Nombre   : "+ nombre   + "<br>"+
                            "<li>Apellido : "+ apellido + "<br>"+
                            "<li>DNI      : "+ dni      + "<br>"+
                            "<li>Dirección: "+ direc    + "<br></ul>";
    form1.reset();
    }
}
