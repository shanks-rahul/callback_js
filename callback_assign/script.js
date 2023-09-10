function f(arr,callback){
    callback();
   
    const arra=arr.map(elem=>{
        return elem=elem*2;
        
        
    })
    console.log("final array"+arra);
    

    
    
}
let arr=[2,3,4,5];

function callback(){
    console.log("initial array"+arr);
}


f(arr,callback);