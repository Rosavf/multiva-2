$(document).ready(function(){

    $.ajax({

        url:'http://35.243.156.112/plataforma/balanza/ciclos/actual',
        method:'POST',
        data:'',
        success:function (response) {
            
            const cicleData = JSON.parse(response);

        }

    });

});