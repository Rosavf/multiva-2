$(document).ready(function(){

    $.ajax({

        url:"http://35.243.156.112/plataforma/balanza/informe/indice",
        method:"GET",
        data:"",
        success:function(response){

            const importTable = new ImportTable();

            if(response=="false"){

                alert("datos vacios");

                
            }

            else{

                data = JSON.parse(response);
                importTable.readData(data);
                importTable.writeTable("#datatable");
                
            }

            /************************************************************************************************************/

            $("#btnImport").click(function(){

                $("#btnImport").val("IMPORTANDO");

                $.ajax({

                    url:'http://35.243.156.112/plataforma/balanza/informe/importar',
                    mehtod:'GET',
                    data:'',
                    success:function(response){

                        while (!response){
                            
                        }
                        window.location.replace("http://35.243.156.112/balanza/importar.php");

                    }

                });

            });

        }



    });

});