$(document).ready(function () {

    $.ajax({

        url:'http://35.243.156.112/plataforma/balanza/ciclos/actual',
        method:'GET',
        data:'',
        success:function(response){

            console.log(response);

        }

    });

    
});