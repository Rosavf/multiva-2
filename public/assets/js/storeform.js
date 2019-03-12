class StoreForm{

    //
    readData(data){

        this.data=data;

    }

    //
    writeForm(divId){

        const month = parseInt(this.data.Mes);
        let selectMonth='';

        for(let i=1; i<=month; i++){

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
            
            selectMonth += '<option value="';
            selectMonth += i.toString();
            selectMonth += '">';
            selectMonth += monthString;
            selectMonth += '</option>';

        }

        $(divId).html(selectMonth);

    }

    readForm(){

        const params={

            year = $("#selectYear").val(),
            month = $("#celectMonth").val()

        };

        return params;

    }

}