const para2=document.getElementById("para2");
const para1=document.getElementById("para1");
const header=document.getElementById("header");
header.textContent+=" "+"(https://jsonplaceholder.typcode.com/posts/123456789)";

fetch("https://jsonplaceholder.typcode.com/posts/123456789").then(function f(response){
    return response.json();
})
.then(function func(value){
    para1.textContent=value;
    
}).catch(function(){
    para2.textContent="error handled";
})