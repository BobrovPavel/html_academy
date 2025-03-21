var modal = document.querySelectorAll(".modal");
var buy = document.querySelectorAll(".catalog-button-buy");
var popup_buy = document.querySelector(".modal-added");
var overlay = document.querySelector(".modal-overlay");
var close_buy = document.querySelector(".modal-added .modal-close");
var catalog_item = document.querySelector(".catalog-item");

function closeModal(modal) {
    modal.classList.remove("show");
    overlay.classList.remove("show-overlay");
}

function showModal(modal) {
    modal.classList.add("show");
    overlay.classList.add("show-overlay");
}

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup_buy.classList.contains("show")) {
            closeModal(popup_buy);
        }
    }
});

document.addEventListener("click", function(evt) {
    if(evt.target.classList.contains("catalog-button-buy")) {
        evt.preventDefault();
        showModal(popup_buy);
    }
});
    
overlay.addEventListener("click", function() {
    closeModal(popup_buy);
});

close_buy.addEventListener("click", function() {
    closeModal(popup_buy);
});
