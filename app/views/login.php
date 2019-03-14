<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>INICIO DE SESION</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
    
<div class="container-fluid">

  <div class="row">
    <div class="col-md-6">
      <div class="card login-card">

      <div class="card-header title-login">INICIO DE SESION</div>

        <!--inicia tarjeta-->
        <div class="card-body">
          <form action="http://35.243.156.112/balanza/public/loginaux.php" method="post" enctype="multipart/form-data">
            <div class="row">

              <div class = "col-md-4">
                <input type="text" name="nickname" placeholder="usuario" class="form-control textbox-nickname">
              </div>

              <div class = "col-md-4">
                <input type="password" name="password" placeholder="password" class="form-control textbox-password">
              </div>

              <div class = "col-md-4">
                <input  type="submit" value="INICIAR SESION" class = "btn btn-block btn-success btn-login">
              </div>
              
            </div>
          </form>
        </div>
        <!--finaliza tarjeta-->

      </div>
    </div>
  </div>
  
</div>

</body>
</html>

