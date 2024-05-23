var button = document.getElementById("home_button_listener");
var is_expanded = false;

// Add an event listener to listen for the "click" event
button.addEventListener("click", function() {

    var grid_container = document.querySelector(".grid_container");
    var toggle_folders = document.querySelector(".folder");
    var toggle_folder_contents = document.querySelector(".folder_contents")

    var image = document.getElementById("about_me_chevron");
    var image_path_2 = "assets/svg/chevron right icon.svg";
    

    if (is_expanded) {
        grid_container.style.gridTemplateColumns = "10% 90%";
        toggle_folders.style.display = "none";
        toggle_folder_contents.style.display = "none";
        image.src = image_path_2;

        console.log(current_image_path);
        console.log("Shrink file manager");
    } else {
        grid_container.style.gridTemplateColumns = "30% 70%";
        toggle_folders.style.display = "flex";


        console.log("Expand file manager");
    }

    is_expanded = !is_expanded;
});