export  class NumberPar{
    isPar(n){
        if(n%2== 0){
            return true
        }else{
            return false
        }

    }

}

export  class Number  {
    isNumber(n){
        if(isNaN(n)){
            return false
        }else{
            return true
        }

    }
}
