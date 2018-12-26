var searchInput = document.querySelector("#site-search");
var searchLabel = document.querySelector("#site-search + label");
var formEmaillInput = document.querySelector("#email-field");
var formEmaillLabel = document.querySelector("#email-field + label");
var formPasswordInput = document.querySelector("#password-field");
var formPasswordlLabel = document.querySelector("#password-field + label");

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