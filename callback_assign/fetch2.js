async function f(url){
    await fetch(url).then(function func(response){
        return response.json(); 
    }).then(function fun(value){
        console.log(value);
    })
}
f("https://jsonplaceholder.typicode.com/posts")