<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="A fully featured admin theme which can be used to build CRM, CMS, etc.">
        <meta name="author" content="Coderthemes">

        <!-- App Favicon -->
        <link rel="shortcut icon" href="assets/images/favicon.ico">
        <!-- App title -->
        <title>Multiva</title>
        <!-- App CSS -->
        <link href="assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link href="assets/css/core.css" rel="stylesheet" type="text/css" />
        <link href="assets/css/components.css" rel="stylesheet" type="text/css" />
        <link href="assets/css/icons.css" rel="stylesheet" type="text/css" />
        <link href="assets/css/pages.css" rel="stylesheet" type="text/css" />
        <link href="assets/css/menu.css" rel="stylesheet" type="text/css" />
        <link href="assets/css/responsive.css" rel="stylesheet" type="text/css" />
        <link href="assets/css/summary.css" rel="stylesheet" type="text/css" />
        <script src="assets/js/modernizr.min.js"></script>
        <script src="assets/plugins/chart.js/chart.min.js"></script>

    </head>

    <body class="fixed-left">

        <!-- Begin page -->
        <div id="wrapper">

            <!-- Top Bar Start -->
            <div class="topbar">

                <!-- LOGO -->
                <div class="topbar-left"><a href="index.html" class="logo"><span>Multi<span>va</span></span><i class="zmdi zmdi-layers"></i></a></div>

                <!-- Button mobile view to collapse sidebar menu -->
                <div class="navbar navbar-default" role="navigation">
                    <div class="container">

                        <!-- Page title -->
                        <ul class="nav navbar-nav navbar-left">
                            <li><button class="button-menu-mobile open-left"><i class="zmdi zmdi-menu"></i></button></li>
                            <li><h4 class="page-title">Resumen por Modulo</h4></li>
                        </ul>

                    </div>
                    <!-- end container -->
                </div>
                <!-- end navbar -->
            </div>
            <!-- Top Bar End -->


            <!-- ========== Left Sidebar Start ========== -->
            <div class="left side-menu">           
                
                <div class="sidebar-inner slimscrollleft">

                    <!-- User -->
                    <div class="user-box">
                        <div class="user-img">
                            <img src="assets/images/logo.jpg" alt="user-img" title="Mat Helme" class="img-circle img-thumbnail img-responsive">
                            <div class="user-status offline"><i class="zmdi zmdi-dot-circle"></i></div>
                        </div>
                        <h5><a href="#">Multiva</a> </h5>
                        <ul class="list-inline">
                            <li>
                                <a href="#" ><i class="zmdi zmdi-settings"></i></a>
                            </li>

                            <li>
                                <a href="#" class="text-custom"><i class="zmdi zmdi-power"></i></a>
                            </li>
                        </ul>
                    </div>
                    <!-- End User -->

                    <!--- Sidemenu -->
                    <div id="sidebar-menu">
                        <span class="text-muted menu-title">MENU DE NAVEGACION</span>
                        <ul>
                            <li class="has_sub">
                                <a href="javascript:void(0);" class="waves-effect"><i class="fa fa-gear"></i> <span>CONFIGURACION</span> <span class="menu-arrow"></span></a>
                                <ul class="list-unstyled">
                                    <li><a href="cuentas.php">Cuentas</a></li>
                                    <li><a href="cecos.php">Cecos</a></li>
                                </ul>
                            </li>
                            <li class="has_sub">
                                <a href="javascript:void(0);" class="waves-effect"><i class="fa fa-file"></i> <span>INFORME</span><span class="menu-arrow"></span></a>
                                <ul class="list-unstyled">
                                    <li><a href="editables.php">Editables</a></li>
                                    <li><a href="importar.php">Importar</a></li>
                                    <li><a href="informe.php">Informe Actual</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div class="clearfix"></div>
                    </div>
                    <!-- Sidebar -->
                    <div class="clearfix"></div>

                </div>

            </div>
            <!-- Left Sidebar End -->
            <div class="content-page">
                <!-- Start content -->
                <div class="content">

                    <!--Contenido Principal-->
                    <div class="container">

                        <div class="row">
                        	<div class="col-sm-12">
                        		<div class="card-box">

                                    <div class="dropdown pull-right">

                                    </div>

                        			<div class="row">
                                        <div class="col-lg-4">
                                            <h4 class="header-title m-t-0 m-b-30">Seleccionar Tipo de Archivo y Archivo</h4>
                                        </div>                                        
                                        <div class="col-lg-4">
                                            <h4 class="header-title m-t-0 m-b-30">Seleccionar Dataset y Nombre de la Tabla</h4>
                                        </div>
                                        <div class="col-lg-4">
                                            <h4 class="header-title m-t-0 m-b-30">Seleccionar Parametros de Creacion y Escritura</h4>
                                        </div>
                                    </div>
                                    
                        			<div class="row">

                                        <form>
                                            <div class="form-group col-lg-2">
                                                <label for="userName">Formato</label>	                                               
                                                <select class="form-control" id="selectFormat">
                                                    <option value = "mensual">CSV</option>
                                                    <option value = "acumulado">JSON</option>
                                                </select>
                                            </div>

                                            <div class="form-group col-lg-2">
                                                <label for="userName">Archivos</label>
                                                <select class="form-control" id="selectFile">
                                                    
                                                </select>
                                            </div>

                                            <div class="form-group col-lg-2">
                                                <label for="userName">Dataset</label>	                                               
                                                <select class="form-control" id="selectDataset">

                                                </select>
                                            </div>

                                            <div class="form-group col-lg-2">
                                                <label for="userName">Tabla</label>
                                                <input type="text" class="form-control">
                                            </div>
                                        </form>

                                        <form>
                                            <div class="form-group col-lg-2">
                                                <label for="userName">Opciones de Creado</label>
                                                <div class="radio">
                                                    <input type="radio" name="radio" id="radioCreate" value="option1" checked>
                                                    <label for="radio1">
                                                        Nunca Crear
                                                    </label>
                                                </div>

                                                <div class="radio">
                                                    <input type="radio" name="radio" id="radioCreate" value="option1" >
                                                    <label for="radio1">
                                                        Depende
                                                    </label>
                                                </div>

                                                <div class="radio">
                                                    <input type="radio" name="radio" id="radioCreate" value="option1" >
                                                    <label for="radio1">
                                                        Siempre
                                                    </label>
                                                </div>
                                            </div>
                                        </form>
                                        <form>                                         
                                            <div class="form-group col-lg-2">
                                                <label for="userName">Opciones de Escritura</label>
                                                <div class="radio">
                                                    <input type="radio" name="radio" id="radioWrite" value="option1" checked>
                                                    <label for="radio1">Agregar a Existente</label>
                                                </div>

                                                <div class="radio">
                                                    <input type="radio" name="radio" id="radioWrite" value="option1" >
                                                    <label for="radio1">Truncar</label>
                                                </div>
                        
                                                <div class="radio">
                                                    <input type="radio" name="radio" id="radioWrite" value="option1" >
                                                    <label for="radio1">Sobreescribir</label>
                                                </div>
                                            </div>   
                                        </form>
                                    </div>
                                    <!-- end row -->

                                    <div class="row">
                                        <div class="col-lg-6"><h4>Opciones de Tipado de Campos</h4></div>
                                        <div class="col-lg-6"><h4>Preferencias</h4></div>
                                    </div>

                                    <div class="row">

                                        <div class="form-group col-lg-2">                        
                                            <label for="userName">Separador de Campos</label>	                                               
                                            <select class="form-control" id="selectFieldMark">
                                                <option value = ",">,</option>
                                                <option value = "|">|</option>
                                                <option value = "\t">\t</option>
                                            </select>
                                        </div>

                                        <div class="form-group col-lg-2">                        
                                            <label for="userName">Entrecomillado</label>	                                               
                                            <select class="form-control" id="selectQuote">
                                                <option value = '"'>"</option>
                                                <option value = "'">'</option>
                                            </select>
                                        </div>

                                        <div class="form-group col-lg-2">                        
                                            <label for="userName">Valor Nulo</label>	                                               
                                            <select class="form-control" id="selectNullable">
                                                <option value = "\N">"\N"</option>
                                            </select>
                                        </div>

                                    </div>

                                    <div class="row">



                                    </div>


                                </div>
                            </div>
                        </div>
                    </div> 
                    <!-- container -->
                </div> 
                <!-- content -->

                <footer class="footer">
                    2018 © Multiva.
                </footer>

            </div>
            <!-- End content-page -->

            <!-- ============================================================== -->
            <!-- End Right content here -->
            <!-- ============================================================== -->


        </div>
        <!-- END wrapper -->

        <script>
            var resizefunc = [];
        </script>

        <!-- jQuery  -->
        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/bootstrap.min.js"></script>
        <script src="assets/js/detect.js"></script>
        <script src="assets/js/fastclick.js"></script>
        <script src="assets/js/jquery.slimscroll.js"></script>
        <script src="assets/js/jquery.blockUI.js"></script>
        <script src="assets/js/waves.js"></script>
        <script src="assets/js/jquery.nicescroll.js"></script>
        <script src="assets/js/jquery.scrollTo.min.js"></script>

        <!-- App js -->
        <script src="assets/js/jquery.core.js"></script>
        <script src="assets/js/jquery.app.js"></script>

        <!-- Developed -->



        <script>


            
        </script>

    </body>
</html>