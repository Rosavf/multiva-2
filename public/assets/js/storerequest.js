$(document).ready(function(){

    globalCicle("INTEGRACION DE GASTOS POR UNIDAD DE NEGOCIO HASTA ");
    const storeForm = new StoreForm();

    $.ajax({

        url:'http://35.243.156.112/plataforma/balanza/ciclos/actual',
        method:'POST',
        data:'',
        success:function (response) {

            const cicleData = JSON.parse(response);
            storeForm.readData(cicleData);
            storeForm.writeForm("#selectMonth");

            $("#btnReport").click(function(){

                const params = storeForm.readForm();

                $.ajax({

                    url:'http://35.243.156.112/plataforma/balanza/reporte/'+params.type+'/'+params.year+'-'+params.month,
                    method:'GET',
                    data:'',
                    success:function(response){

                        const tableData = JSON.parse(response);
                        const modularTable = new ModularTable();
                        modularTable.readData(tableData);
                        $("#datatable").html('');
                        modularTable.writeTable("#datatable");
                        mudularTable=null;

                    }

                });

            });

        }

    });

});