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

            $("#btnReport").click(function(){

                const params = storeForm.readForm();

                console.log(params);

                $.ajax({

                    url:'http://35.243.156.112/plataforma/balanza/reporte/mensual/'+params.year+'-'+params.month,
                    method:'GET',
                    data:'',
                    success:function(response){

                        const tableData = JSON.parse(response);

                        const modularTable = new ModularTable();
                        modularTable.readData(tableData);
                        $("#datatable").html('');
                        modularTable.writeTable("#datatable");

                    }

                });

            });

        }

    });

});