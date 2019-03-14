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

            year : $("#selectYear").val(),
            month : $("#selectMonth").val(),
            type : $("#selectType").val()

        };
        
        return params;

    }

}