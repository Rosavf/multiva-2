class CecosForm{

    readSearchForm(moduleId,cecoId){

        const moduleVal=$(moduleId).val();
        const cecoVal=$(cecoId).val();

        let search={

            module:moduleVal,
            ceco:cecoVal

        }

        if(cecoVal===""){

            search.ceco="all";
            
        }

        else{



        }

        return search.module+"-"+search.ceco;

    }


}