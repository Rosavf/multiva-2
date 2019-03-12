
$(document).ready(function(){

    $.ajax({

        url:'http://35.243.156.112/plataforma/balanza/cuentas/indice',
        method:'GET',
        data:'',
        success:function (response) {

            let stage=0;
            
            const responseData = JSON.parse(response);
            const table = new AccountTable();
            table.readData(responseData);
            table.writeTable("#datatable");

            //
            $("#btnUpdate").click(function(){

                if(stage){

                    alert("necesita confirmar usuario para continuar");

                }

                else{

                    $("#userForm").show();
                    stage=1;

                    let userForm = new UserForm("#textUser","#textPassword");

                    $("#btnConfirm").click(function(){

                        //en caso de tener los datos correctos
                        if(userForm.preventEmpty()){

                            console.log('clicked');

                            let userData=userForm.getUserData();

                            let postData = JSON.stringify(table.getData());

                            $.ajax({
        
                                url:'http://35.243.156.112/plataforma/balanza/cuentas/actualizar',
                                method:'POST',
                                data:{"usr":userData,"req":postData},
                                success:function (response) {

                                    while(!response){}
        
                                    window.location.replace("http://35.243.156.112/balanza/cuentas.php");

                                }
        
                            });

                        }

                        //en caso de que los parametros esten sin llenar
                        else{

                            alert('por favor llene los parametros');

                        }


                    });


                    $("#btnCancel").click(function(){

                        window.location.replace("http://35.243.156.112/balanza/cuentas.php");

                    });


                }


            });

        }

    });

});