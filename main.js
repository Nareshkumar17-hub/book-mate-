      
      
      let btn = document.getElementById("btn"); 


btn.addEventListener("click" , function(e){ 
    e.preventDefault()

    let input = document.getElementById("input") ; 
    let title = document.getElementById("title") ;  
    let poster = document.getElementById("poster") ;  
    let info = document.getElementById("info") ;  
    let authors = document.getElementById("authors") ;  
    let buy = document.getElementById("buy") ;  
    let box =  document.getElementById("display");








    fetch(`https://www.googleapis.com/books/v1/volumes?q=${input.value.trim()}`)
  .then(response => response.json())
  .then(data => {
       title.innerHTML = data.items[0].volumeInfo.title ;  
       poster.src = data.items[0].volumeInfo.imageLinks.thumbnail ;  
       info.innerHTML =  data.items[0].volumeInfo.description.slice(0, 100) ; 
       authors.innerHTML = ` -${data.items[0].volumeInfo.authors}`; 
       buy.href = data.items[0].book.saleInfo.buyLink; 
  })
  .catch(error => console.error("Error:", error));  



  input.value = "" 
  

  // display showing 

 box.classList.remove("d-none"); // show  
 box.style.display = "flex" ;  



})
