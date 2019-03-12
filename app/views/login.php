<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

</head>
<body>
    

<div class="container-fluid">

  <div class="row">
    <div class="col-md-6">
      <div class="card" id="login-form">

      <div class="card-header">INICIO DE SESION</div>

        <!--inicia tarjeta-->
        <div class="card-body">
          <form action="http://35.243.156.112/balanza/public/loginaux.php" method="post" enctype="multipart/form-data">
            <div class="row">

              <div class = "col">
                <input type="text" name="nickname" class="form-control">
              </div>

              <div class = "col">
                <input type="password" name="password" class="form-control">
              </div>

              <div class = "col">
                <input  type="submit" value="INICIAR SESION" class = "btn btn-block btn-success">
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

