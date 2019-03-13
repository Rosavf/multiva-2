$(document).ready(function(){

    const storeForm = new StoreForm();
    const modularTable = new modularTable();

    $.ajax({

        url:'http://35.243.156.112/plataforma/balanza/ciclos/actual',
        method:'POST',
        data:'',
        success:function (response) {

            console.log(response);
            const cicleData = JSON.parse(response);
            storeForm.readData(cicleData);
            storeForm.writeForm("#selectMonth");

            $("#btnReport").click(function(){

                $.ajax({

                    url:'http://35.243.156.112/plataforma/balanza/reporte/mensual/'+storeForm.year+'-'.storeForm.month,
                    method:'GET',
                    data:'',
                    success:function(response){

                        const tableData = JSON.parse(response);

                        modularTable.readData(tableData);
                        modularTable.writeTable("#datatable");

                    }

                });

            });

        }

    });

});