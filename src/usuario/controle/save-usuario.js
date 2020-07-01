$(document).ready(function() {

    $('.btn-save').click(function(e) {
        // Irei coletar todas as informações digitadas no formulário
        let dados = $('#add-usuario').serialize()

        $.post("https://adrianocastro.info/mypwa/src/tarefa/modelo/save-tarefa.php", dados).done(function(data) {

        })

        // $.ajax({
        //     type: 'POST',
        //     dataType: 'JSON',
        //     assync: true,
        //     data: dados,
        //     url: 'https://adrianocastro.info/mypwa/src/tarefa/modelo/save-tarefa.php',
        //     success: function(dados) {

        //     }
        // })
    })
})