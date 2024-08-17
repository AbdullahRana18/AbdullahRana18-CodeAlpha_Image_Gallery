document.addEventListener("click", function(e) {
    if (e.target.classList.contains("gallery")) {
        const src = e.target.getAttribute("src");
        document.querySelector(".model-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('galleryModal'));
        myModal.show();
    }
});
