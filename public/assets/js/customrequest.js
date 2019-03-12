$(document).ready(function(){

    $.ajax({

        url:'http://35.243.156.112/plataforma/balanza/editables/indice',
        method:'POST',
        data:'',
        success:function (response) {

            const data=JSON.parse(response);
            const table = new CustomTable();
            table.readData(data);
            table.writeTable("#datatable");

            $("#btnUpdate").click(function(){

                const postData =JSON.stringify(table.getData());

                $.ajax({

                    url:'http://35.243.156.112/plataforma/balanza/editables/actualizar',
                    method:'POST',
                    data:{"req":postData},
                    success:function (response) {
                        
                        window.location.replace("http://35.243.156.112/balanza/editables.php");

                    }

                });

            });
            
        }

    });


});