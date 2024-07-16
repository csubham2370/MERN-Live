document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to the page!");

    document.getElementById("addToBag").addEventListener("click", function() {
        alert("Added to Bag!");
    });

    document.getElementById("wishlist").addEventListener("click", function() {
        alert("Added to Wishlist!");
    });
});
