var cartPopup = document.querySelector(".modal-putitem");
var buyButton = document.querySelector(".button-buy");
var cartClose = cartPopup.querySelector(".modal-close");
var returnButton = cartPopup.querySelector(".return-button");

buyButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    cartPopup.classList.add("modal-show");
})

cartClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-show");
})

returnButton.addEventListener("click", function(evt) {
    evt.defaultPrevented();
    cartPopup.classList.remove("modal-show");
})

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (cartPopup.classList.contains("modal-show")) {
            cartPopup.classList.remove("modal-show");
        }
    }
});