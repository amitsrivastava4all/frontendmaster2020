const validations = {
    isBlank(str){
        if(!str && str.length==0){
            return true;
        }
        else{
            return false;
        }
    },
    isMin(str, min){
        if(str.length<min){
            return true;
        }
        else{
            return false;
        }
    },
    isAlpha(){

    },
    isNumeric(){

    },
    isValidEmail(){

    },
    isValidPhone(){

    }
}
export default validations;