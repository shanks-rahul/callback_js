function manipulateString(string,logstring){
    
    let newstr=string.toUpperCase();
    console.log(logstring() +newstr);
    
}

function logstring(){
    return("manipulated string is : ")
}


manipulateString("rahul",logstring)