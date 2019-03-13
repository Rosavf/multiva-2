function globalCicle(staticTitle) {

    $.ajax({
    
        url:'http://35.243.156.112/plataforma/balanza/ciclos/actual',
        method:'POST',
        data:'',
        success:function (response) {

            const globalCicle = JSON.parse(response);
            let yearString = globalCicle.Anualidad;
            let monthString;

            for(let i=1; i<=parseInt(globalCicle.Mes); i++){

                let monthString;
    
                switch (i) {
                    case 1:
                    monthString="Enero";
                        break;
                    case 2:
                    monthString="Febrero";
                        break;
    
                    case 3:
                    monthString="Marzo";
                        break;
    
                    case 4:
                    monthString="Abril";
                        break;
    
                    case 5:
                    monthString="Mayo";
                        break;
    
                    case 6:
                    monthString="Junio";
                        break;
    
                    case 7:
                    monthString="Julio";
                        break;
    
                    case 8:
                    monthString="Agosto";
                        break;
    
                    case 9:
                    monthString="Septiembre";
                        break;
    
                    case 10:
                    monthString="Octubre";
                        break;
    
                    case 11:
                    monthString="Noviembre";
                        break;
    
                    case 12:
                    monthString="Diciembre";
                        break;
                
                    default:
                    monthString="Enero";
                        break;
                }
                
                
            }

            const dynamicTitle = monthString+" del "+yearString;

            $('.page-title').html(staticTitle+dynamicTitle);

        }


    });

}