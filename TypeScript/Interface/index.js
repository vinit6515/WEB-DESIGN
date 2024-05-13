var productOne = {
    name: "San-disk",
    price: 500,
    description: "64 GB Storage"
};
function display() {
    var productOneElement = document.getElementById("productDetails");
    if (productOneElement) {
        return "\n        <div id=\"product-details\">\n        <h1>".concat(productOne.name, "</h1>\n        Price : ").concat(productOne.price, " <br>\n        Description: ").concat(productOne.description, "\n        </div>\n        ");
    }
}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("productDetails").innerHTML = display();
});
