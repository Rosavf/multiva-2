$(document).ready(function(){

    const storeForm = new StoreForm();

    $.ajax({

        url:'http://35.243.156.112/plataforma/balanza/ciclos/actual',
        method:'POST',
        data:'',
        success:function (response) {

            console.log(response);
            
            const cicleData = JSON.parse(response);
            storeForm.readData(cicleData);
            storeForm.writeForm("#selectMonth");

        }

    });

});