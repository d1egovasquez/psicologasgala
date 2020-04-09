$(document).ready(function() {

    $('#btn_enviar').click(function() {
        var errores = '';
        if ($('#nombre').val() == '') {
            errores += '| Escriba un nombre |';
        }
        if ($('#email').val() == '') {
            errores += '| Escriba un correo electronico |';
        }
        if ($('#telefono').val() == '') {
            errores += '| Escriba un teléfono |';
        }
        if ($('#mensaje').val() == '') {
            errores += '| No puede dejar el mensaje en blanco |';
        }
        alert(errores);
    });
});