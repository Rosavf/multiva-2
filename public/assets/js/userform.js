class UserForm{

    constructor(userId,passwordId){

        this.userId=userId;
        this.passwordId=passwordId;
        this.userData=null;

    }

    preventEmpty(){

        let data={

            user : $(this.userId).val(),
            password : $(this.passwordId).val()

        }

        if((data.user!="")&&(data.password=!"")){

            this.userData=data;

            return true;

        }

        else{

            return false

        }


    }

    getUserData(){

        return this.userData;

    }


}