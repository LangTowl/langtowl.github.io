var button = document.getElementById("home_button_listener");
var is_expanded = false;

// Add an event listener to listen for the "click" event
button.addEventListener("click", function() {

    var grid_container = document.querySelector(".grid_container");
    var toggle_folders = document.querySelector(".folder");
    
    if (is_expanded) {
        grid_container.style.gridTemplateColumns = "10% 90%";
        toggle_folders.style.display = "none";
        console.log("Shrink file manager");
    } else {
        grid_container.style.gridTemplateColumns = "30% 70%";
        toggle_folders.style.display = "flex";
        console.log("Expand file manager");
    }

    is_expanded = !is_expanded;
});