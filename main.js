var modal = document.querySelectorAll(".modal");
var support = document.querySelector(".full-width-button");
var buy = document.querySelectorAll(".catalog-button-buy");
var popup_feedback = document.querySelector(".modal-feedback");
var popup_buy = document.querySelector(".modal-added");
var popup_map = document.querySelector(".modal-map");
var overlay = document.querySelector(".modal-overlay");
var close_feedback = document.querySelector(".modal-feedback .modal-close");
var close_buy = document.querySelector(".modal-added .modal-close");
var close_map = document.querySelector(".modal-map .modal-close");
var login = popup_feedback.querySelector("#input-name");
var email = popup_feedback.querySelector("#input-email");
var form = popup_feedback.querySelector("form");
var login_error = popup_feedback.querySelector(".col1 .error");
var email_error = popup_feedback.querySelector(".col2 .error");
var login_storage = localStorage.getItem("login");
var email_storage = localStorage.getItem("email");
var catalog_item = document.querySelector(".catalog-item");
var map_button = document.querySelector(".open-map-button");

function closeModal(modal) {
    modal.classList.remove("show");
    overlay.classList.remove("show-overlay");
    popup_feedback.classList.remove("modal-error");
}

function showModal(modal) {
    modal.classList.add("show");
    overlay.classList.add("show-overlay");
}

function removeError(element) {
    element.classList.remove("show-error");
}

function showErrorAnimation () {
    popup_feedback.classList.remove("modal-error");
    void popup_feedback.offsetWidth;
    popup_feedback.classList.add("modal-error");
}

window.addEventListener("keydown", function(evt){
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup_feedback.classList.contains("show")) {
            closeModal(popup_feedback);
        }
    }
});

window.addEventListener("keydown", function(evt){
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup_buy.classList.contains("show")) {
            closeModal(popup_buy);
        }
    }
});

form.addEventListener("submit", function(evt) {
    evt.preventDefault();
    if(!login.value) {
        login_error.classList.add("show-error");
        showErrorAnimation();
    } 
    if(!email.value) {
        email_error.classList.add("show-error");
        showErrorAnimation();
    }
    if(login.value){
        localStorage.setItem("login", login.value);
    }
    if(email.value) {
        localStorage.setItem("email", email.value);
    }
});

login.addEventListener("focus", function(evt) {
    evt.preventDefault();
    removeError(login_error);
});

email.addEventListener("focus", function(evt) {
    evt.preventDefault();
    removeError(email_error);
});

support.addEventListener("click", function(evt) {
    evt.preventDefault();
    showModal(popup_feedback);
    if (login_storage) {
        login.value = login_storage;
        email.focus();
    }
    if(email_storage) {
        email.value = email_storage;
        login.focus();
    }
    else {
        login.focus();
    }
});

map_button.addEventListener("click", function(evt) {
    evt.preventDefault();
    showModal(popup_map);
});

document.addEventListener("click", function(evt) {
    if(evt.target.classList.contains("catalog-button-buy")) {
        evt.preventDefault();
        showModal(popup_buy);
    }
});
    
overlay.addEventListener("click", function() {
    closeModal(popup_feedback);
});

close_feedback.addEventListener("click", function() {
    closeModal(popup_feedback);
});

overlay.addEventListener("click", function() {
    closeModal(popup_buy);
});

close_buy.addEventListener("click", function() {
    closeModal(popup_buy);
});

overlay.addEventListener("click", function() {
    closeModal(popup_map);
});

close_map.addEventListener("click", function() {
    closeModal(popup_map);
});