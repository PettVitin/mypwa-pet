$(document).ready(function() {

    $('.btn-new').click(function(e) {
        e.preventDefault()
        $('#content').empty()
        $('#content').load('src/usuario/visao/save-usuario.html')
    })

})