class ImportTable{

    constructor(){



    }

    validate(response){

        if (response=="false"){

            return false;

        }

        else{

            return true;

        }

    }

    readData(data){

        this.size=data.length;
        this.headers=[];
        this.matrix=[];

        if(this.size){

            let set=true;

            data.forEach(row => {

                if(set){

                    set = false;

                    this.headers.push("#");
                    this.headers.push("CUENTA");
                    this.headers.push("SUPER CONCEPTO");
                    this.headers.push("CONCEPTO");

                    row.Montos.forEach(ammount=>{

                        this.headers.push(ammount.Modulo);

                    });

                }

                let line=[];

                line.push({value:row.Id,key:"none"});
                line.push({value:row.Cuenta,key:"none"});
                line.push({value:row.Super_Concepto,key:"none"});
                line.push({value:row.Concepto,key:"none"});

                row.Montos.forEach(ammount => {

                    line.push({value:ammount.Monto,key:row.Id+"-"+ammount.Modulo});

                });

                this.matrix.push(line);

            });

        }

    }

    writeTable(divId){

        if(this.size){

            let table='';
            let head='';
            let body='';

            head+='<thead><tr>';
            this.headers.forEach(header=>{

                head+='<th>';
                head+=header;
                head+='</th>';

            });
            head+='</tr></thead>';


            body+='<tbody>';
            
            this.matrix.forEach(row => {

                body+='<tr>';

                for(let i =0; i<row.length; i++){

                    if(i<4){

                        body+='<td>';
                        body+=row[i].value;
                        body+='</td>';

                    }

                    else{

                        body+='<td>';
                        body+=stdToEng(row[i].value);
                        body+='</td>';

                    }

                }

                body+='</tr>';
                
            });

            body+='</tbody>';

            table+=head;

            table+=body;

            $(divId).html(table);
    
        }


    }

}