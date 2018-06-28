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

    if (storage) {
        name.value = storage;
        email.focus();
    }
    //  else {
    // name.focus();}

})

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
})

form.addEventListener("submit", function(evt) {
    evt.defaultPrevented();
    if (!name.value) {
        evt.preventDefault();
    } else if (isStorageSupport) {
        localStorage.setItem("name", name.value)
    }
})

form.addEventListener("submit", function(evt) {
    evt.defaultPrevented();
    if (!email.value) {
        evt.preventDefault();
    } else if (isStorageSupport) {
        localStorage.setItem("email", email.value)
    }
})

form.addEventListener("submit", function(evt) {
    evt.defaultPrevented();
    if (!letter.value) {
        evt.preventDefault();
    }
})

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
        }
    }
});