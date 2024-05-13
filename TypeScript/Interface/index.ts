interface Product{
    name:string;
    price:number;
    description:string;
}
const productOne : Product={
    name:"San-disk",
    price:500,
    description:"64 GB Storage"
}


function display(){
    var productOneElement=document.getElementById("productDetails");
    if(productOneElement){
        return `
        <div id="product-details">
        <h1>${productOne.name}</h1>
        Price : ${productOne.price} <br>
        Description: ${productOne.description}
        </div>
        `;
    }
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("productDetails").innerHTML = display();
});