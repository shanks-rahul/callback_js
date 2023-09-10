const person={
    Firstname:"Rahul",
    lastname:"Agarwalla",
    age:18
}
function f(object,callback){
    let str="";
    str+=object.Firstname+" "+object.lastname;
    
    console.log(callback()+str);
    let Age=object.age;
    console.log("Age in Days :"+Age*365);
}
function callback(){
    return "Full name is :";
}

f(person,callback);