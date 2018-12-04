var modal = document.querySelectorAll(".modal");
var support = document.querySelector(".full-width-button");
var buy = document.querySelectorAll(".catalog-button-buy");
var bu = document.querySelector(".catalog-button-buy");
var popup_feedback = document.querySelector(".modal-feedback");
var popup_buy = document.querySelector(".modal-added");
var overlay = document.querySelector(".modal-overlay");
var close_feedback = document.querySelector(".modal-feedback .modal-close");
var close_buy = document.querySelector(".modal-added .modal-close");
var login = popup_feedback.querySelector("#input-name");
var email = popup_feedback.querySelector("#input-email");
var form = popup_feedback.querySelector("form");
var login_error = popup_feedback.querySelector(".col1 .error");
var email_error = popup_feedback.querySelector(".col2 .error");
var isStorageSupport = true;
var login_storage = localStorage.getItem("login");
var email_storage = localStorage.getItem("email");        

function closeModal(modal) {
    modal.classList.remove("show");
    overlay.classList.remove("show-overlay");
}

function showModal(modal) {
    modal.classList.add("show");
    overlay.classList.add("show-overlay");
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
        popup_feedback.classList.add("modal-error");
    } 
    if(!email.value) {
        email_error.classList.add("show-error");
    }
    if(isStorageSupport && login.value){
        localStorage.setItem("login", login.value);
    }
    if(isStorageSupport && email.value){
        localStorage.setItem("email", email.value);
    }
});

login.addEventListener("focus", function(evt) {
    evt.preventDefault();
    login_error.classList.remove("show-error");
});
email.addEventListener("focus", function(evt) {
    evt.preventDefault();
    email_error.classList.remove("show-error");
});

support.addEventListener("click", function(evt) {
    evt.preventDefault();
    showModal(popup_feedback);
    login.focus();
    if (login_storage) {
        login.value = login_storage;
        email.focus();
    }
    if(email_storage) {
        email.value = email_storage;
        login.focus();
    }
});

document.addEventListener("click", function(evt) {
    evt.preventDefault();
    if(evt.target.classList.contains("catalog-button-buy")) {
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