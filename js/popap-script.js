var button = document.querySelector(".find-us"),
    popup = document.querySelector(".modal-writeus"),
    close = popup.querySelector(".modal-close"),
    name = popup.querySelector(".username"),
    form = popup.querySelector(".feedback-form"),
    email = popup.querySelector(".email"),
    letter = popup.querySelector(".letter"),
    isStorageSupport = !0,
    storage = "";
try { storage = localStorage.getItem("name") } catch (e) { isStorageSupport = !1 }
button.addEventListener("click", function(e) { e.preventDefault(), popup.classList.add("modal-show") }), close.addEventListener("click", function(e) { e.preventDefault(), popup.classList.remove("modal-show") }), form.addEventListener("submit", function(e) { e.defaultPrevented(), name.value ? isStorageSupport && localStorage.setItem("name", name.value) : e.preventDefault() }), form.addEventListener("submit", function(e) { e.defaultPrevented(), email.value ? isStorageSupport && localStorage.setItem("email", email.value) : e.preventDefault() }), form.addEventListener("submit", function(e) { e.defaultPrevented(), letter.value || e.preventDefault() }), window.addEventListener("keydown", function(e) { 27 === e.keyCode && (e.preventDefault(), popup.classList.contains("modal-show") && popup.classList.remove("modal-show")) });
var mapButton = document.querySelector(".button-map"),
    mapPopup = document.querySelector(".modal-map"),
    mapClose = mapPopup.querySelector(".modal-close");
mapButton.addEventListener("click", function(e) { e.preventDefault(), mapPopup.classList.add("modal-show") }), mapClose.addEventListener("click", function(e) { e.preventDefault(), mapPopup.classList.remove("modal-show") }), window.addEventListener("keydown", function(e) { 27 === e.keyCode && (e.preventDefault(), mapPopup.classList.contains("modal-show") && mapPopup.classList.remove("modal-show")) });
var cartPopup = document.querySelector(".modal-putitem"),
    buyButton = document.querySelector(".button-buy"),
    cartClose = cartPopup.querySelector(".modal-close"),
    returnButton = cartPopup.querySelector(".return-button");
buyButton.addEventListener("click", function(e) { e.preventDefault(), cartPopup.classList.add("modal-show") }), cartClose.addEventListener("click", function(e) { e.preventDefault(), cartPopup.classList.remove("modal-show") }), returnButton.addEventListener("click", function(e) { e.defaultPrevented(), cartPopup.classList.remove("modal-show") }), window.addEventListener("keydown", function(e) { 27 === e.keyCode && (e.preventDefault(), cartPopup.classList.contains("modal-show") && cartPopup.classList.remove("modal-show")) });