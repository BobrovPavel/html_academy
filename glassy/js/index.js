var modalClass = document.querySelectorAll(".modal");
var feedbackButton = document.querySelector(".address-button");
var feedbackModal = document.querySelector(".feedback-modal");
var overlay = document.querySelector(".modal-overlay");
var closeModalButton = document.querySelector(".modal-close");
var submitButton = document.querySelector(".feedback-modal .button");
var nameInput = document.querySelector("#modal-input-name");
var nameLabel = document.querySelector("#modal-input-name + label");
var emailInput = document.querySelector("#modal-input-email");
var emailLabel = document.querySelector("#modal-input-email + label");
var searchInput = document.querySelector("#site-search");
var searchLabel = document.querySelector("#site-search + label");
var formEmaillInput = document.querySelector("#email-field");
var formEmaillLabel = document.querySelector("#email-field + label");
var formPasswordInput = document.querySelector("#password-field");
var formPasswordlLabel = document.querySelector("#password-field + label");

function showModal(modal) {
    modal.classList.add("show", "show-animation");
    overlay.classList.add("show");
}

function closeModal(modal) {
    modal.classList.remove("show");
    overlay.classList.remove("show");
}

function moveLabel(input, label) {
    if(input.value) {
        label.classList.add("label-hide");
    } else {
        label.classList.remove("label-hide");
    }
}

formEmaillInput.addEventListener("focusout", function() {
    moveLabel(formEmaillInput, formEmaillLabel);
});

formPasswordInput.addEventListener("focusout", function() {
    moveLabel(formPasswordInput, formPasswordlLabel);
});

searchInput.addEventListener("focusout", function() {
    moveLabel(searchInput, searchLabel);
});

nameInput.addEventListener("focusout", function() {
    moveLabel(nameInput, nameLabel);
});

emailInput.addEventListener("focusout", function() {
    moveLabel(emailInput, emailLabel);
});

feedbackButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    showModal(feedbackModal);
});

closeModalButton.addEventListener("click", function() {
    console.log("click");
    closeModal(feedbackModal);
});

overlay.addEventListener("click", function() {
    closeModal(feedbackModal);
});

submitButton.addEventListener("click", function() {
    closeModal(feedbackModal);
});

window.addEventListener("keydown", function(evt) {
    if(evt.keyCode == 27) {
        evt.preventDefault();
        if(feedbackModal.classList.contains("show")) {
            closeModal(feedbackModal);
        }
    }          
});