var button = document.querySelector(".find-us");
var popup = document.querySelector(".modal-writeus");
var close = popup.querySelector(".modal-close");
var name = popup.querySelector(".username")
var form = popup.querySelector(".feedback-form");
var email = popup.querySelector(".email");
var letter = popup.querySelector(".letter");
var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("name");
} catch (err) {
    isStorageSupport = false;
}

button.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
})

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
})

form.addEventListener("submit", function(evt) {
    evt.defaultPrevented();
    if (!name.value || !email.value || !letter.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add(".modal-error");
    } else if (isStorageSupport) {
        localStorage.setItem("name", name.value);
        localStorage.setItem("email", email.value);
    }
})


window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
});

var mapButton = document.querySelector(".button-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
})

mapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
})

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (mapPopup.classList.contains("modal-show")) {
            mapPopup.classList.remove("modal-show");
        }
    }
});

var cartPopup = document.querySelector(".modal-putitem");
var buyButton = document.querySelectorAll(".button-buy");
var cartClose = cartPopup.querySelector(".modal-close");
var returnButton = cartPopup.querySelector(".return-button");

for (i = 0; i < buyButton.length; i++) {
    buyButton[i].addEventListener("click", function(evt) {
        evt.preventDefault();
        cartPopup.classList.add("modal-show");
    })

}

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