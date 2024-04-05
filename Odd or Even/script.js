function checker(number){
    if (number % 2==0) return true;
    return false;
}

function button(){
    if(checker(document.getElementById('input').value)){
        document.getElementById('text').innerHTML = "is an even number"
    }else{
        document.getElementById('text').innerHTML = "is an odd number"
    }
}