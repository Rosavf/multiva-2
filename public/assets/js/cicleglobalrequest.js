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
    
                switch (i) {
                    case 1:
                    monthString="ENERO";
                        break;
                    case 2:
                    monthString="FEBRERO";
                        break;
    
                    case 3:
                    monthString="MARZO";
                        break;
    
                    case 4:
                    monthString="ABRIL";
                        break;
    
                    case 5:
                    monthString="MAYO";
                        break;
    
                    case 6:
                    monthString="JUNIO";
                        break;
    
                    case 7:
                    monthString="JULIO";
                        break;
    
                    case 8:
                    monthString="AGOSTO";
                        break;
    
                    case 9:
                    monthString="SEPTIEMBRE";
                        break;
    
                    case 10:
                    monthString="OCTUBRE";
                        break;
    
                    case 11:
                    monthString="NOVIEMBRE";
                        break;
    
                    case 12:
                    monthString="DICIEMBRE";
                        break;
                
                    default:
                    monthString="ENERO";
                        break;
                }
                
                
            }

            const dynamicTitle = monthString+" DEL "+yearString;

            $('.page-title').html(staticTitle+dynamicTitle);

        }


    });

}