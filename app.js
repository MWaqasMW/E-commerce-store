

let diffproduct= document.getElementById("diffproduct");

 let click=(item = "electronics")=>{
  console.log(item)
 

fetch(`https://fakestoreapi.com/products/category/${item}`)
.then(res => res.json())
.then(res  =>{
    for(var i =0; i<res.length; i++){
        console.log(res[i].price)

        diffproduct.innerHTML +=`
       
        <div class="card" style="max-width: 380px;">
       
        <img src="${res[i].image }" class="card-img-top" alt="..." width="100%">
        <div class="card-body">
          <p class="card-text">${res[i].title}</p>
          <div class="price">${res[i].price}</div>
      <div class="discount-price"><del>Rs.549</del>-17%</div>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star"></span>
      <span class="fa fa-star"></span>
      <span class="discount-price">(${res[i].rating.rate})</span>
      <\div>
        </div>
   
        `
        
    
    }

}
)

.catch(rej => console.log(rej))
 }

click()


let categories= document.getElementById("categories");
fetch(`https://fakestoreapi.com/products`)



.then(res => res.json())
.then(res  =>{
  console.log(res[i])
    for(var i =0; i<res.length; i++){
        console.log(res[i])

        categories.innerHTML +=`
        <div class="container card" style="max-width: 980px;" >
        <div class="row g-0">
        <div class="col-md-4">
          <img src="${res[i].image}" class="img-fluid " alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${res[i].title}</h5>
            <p class="card-text">${res[i].description}</p>
            <div class="price">${res[i].price}</div>
            <div class="discount-price"><del>Rs.549</del>-17%</div>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="discount-price">(${res[i].rating.rate})</span>
          </div>
        </div>
      </div>
      </div>
    
        `
        
    }
   
}
)
.catch(rej => console.log(rej))



