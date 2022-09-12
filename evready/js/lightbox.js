// Get the modal


// Get the image and insert it inside the modal - use its "alt" text as a caption

function openModal(imageId) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modal-image");
    modal.style.display = "block";
    modalImg.src = document.getElementById(imageId).getAttribute("src");
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}