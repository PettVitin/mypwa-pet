$(document).ready(function() {

    $('#start').click(function(e) {
        e.preventDefault()
        $('#content').empty()
        $('#content').load('src/usuario/visao/login-usuario.html')
    })
})