class AccountTable{

    readData(data){

        this.data=data;
        this.size=data.length;
        this.headers=["#","CUENTA","SUPER CONCEPTO","CONCEPTO","EDITABLE"];

    }

    writeTable(divId){

        let table='';
        let body='';
        let head='';

        head+='<thead><tr>';

        this.headers.forEach(header=>{

            head+='<th>';
            head+=header;
            head+='</th>';

        })

        head+='</tr></thead>';


        body+='<tbody>';

        this.data.forEach(row => {

            body+='<tr>';

                body+='<td>';
                body+=row.Id;
                body+='</td>';

                body+='<td>';
                body+=row.Cuenta;
                body+='</td>';

                body+='<td>';
                body+=row.Super_Concepto;
                body+='</td>';

                body+='<td>';
                body+=row.Concepto;
                body+='</td>';

                body+='<td>';
                body+='<';
                body+='input type="checkbox" ';
                body+=' class="check-account" ';
                body+='id="a';
                body+=row.Id;
                body+='"';

                if(row.Editable=="1"){

                    body+=' checked';

                }

                body+='>';
                body+='</td>';
                body+='</tr>';
            
        });

        body+='</tbody>';
        table+=head;
        table+=body;

        this.data=null;

        $(divId).html(table);

    }

    getData(){

        let updatetable=[];

        for (let i = 1; i <=this.size; i++){

            const id = "#a"+String(i);
            let editable;

            if($(id).is(':checked')){

                editable="1"

            }

            else{

                editable="0"

            }

            let cell={

                value: editable,

                id: i.toString()

            }

            updatetable.push(cell);

        }

        return updatetable;

    }



}