var elLink = document.querySelectorAll(".fruit-list-link");
var elProduct = document.querySelectorAll(".product-wrap");

elLink.forEach(function(links){

    links.addEventListener("click", function(evt){
        evt.preventDefault();

    })
    elProduct.forEach(function(product){

        product.classList.remove("product-list--active");
    })
    document.querySelector(links.getAttribute("href")).classList.add("product-list--active");
})