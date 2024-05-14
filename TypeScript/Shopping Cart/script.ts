interface Product {
    name: string;
}

let cart: Product[] = [];

function addToCart(productName: string): void {
    const product: Product = { name: productName };
    cart.push(product);
    displayCart();
}

function removeFromCart(index: number): void {
    cart.splice(index, 1);
    displayCart();
}

function displayCart(): void {
    const cartItemsElement: HTMLElement | null = document.getElementById("cart-items");
    if (cartItemsElement) {
        cartItemsElement.innerHTML = "";
        cart.forEach((product, index) => {
            const li = document.createElement("li");
            li.textContent = product.name;
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.addEventListener("click", () => {
                removeFromCart(index);
            });
            li.appendChild(removeButton);
            cartItemsElement.appendChild(li);
        });
    }
}
