var cart = [];
function addToCart(productName) {
    var product = { name: productName };
    cart.push(product);
    displayCart();
}
function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}
function displayCart() {
    var cartItemsElement = document.getElementById("cart-items");
    if (cartItemsElement) {
        cartItemsElement.innerHTML = "";
        cart.forEach(function (product, index) {
            var li = document.createElement("li");
            li.textContent = product.name;
            var removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.addEventListener("click", function () {
                removeFromCart(index);
            });
            li.appendChild(removeButton);
            cartItemsElement.appendChild(li);
        });
    }
}
