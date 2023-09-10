const books={
    book1:{title:"zitle1",book:"book1",author:"author1"},
    book2:{title:"title2",book:"book2",author:"author2"},
    book3:{title:"title3",book:"book3",author:"author3"}
}

function titleBooks(object,callback){
    
    const newArr=Object.entries(object);
    const arr=[];
    
    newArr.map(function([bookname,book]){
        arr.push(book.title)       
        
    })
    callback();
    console.log(arr.sort());
    
}

function callback(){
    console.log("alphabetical order of titles : ");

}
titleBooks(books,callback);



