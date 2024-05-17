var button = document.getElementById("folder_button_about_me_listener");
var image = document.getElementById("about_me_chevron");

var image_path_1 = "assets/svg/chevron down icon.svg";
var image_path_2 = "assets/svg/chevron right icon.svg";
var current_image_path = image_path_2;

var html_path_1 = "html/content_test.html";
var html_path_2 = "html/content_test_2.html";
var current_html_path = html_path_1;

fetch(current_html_path)
.then(response => response.text())
.then(data => {
document.getElementById('main_content').innerHTML = data;
})
.catch(error => console.error('Error fetching content:', error));

button.addEventListener("click", function() {
    console.log("About Me Button Pressed");

    if (current_image_path == image_path_1) {
        image.src = image_path_2;
        current_image_path = image_path_2;
        current_html_path = html_path_1;
    } else {
        image.src = image_path_1;
        current_image_path = image_path_1;
        current_html_path = html_path_2;
    }

    fetch(current_html_path)
    .then(response => response.text())
    .then(data => {
    document.getElementById('main_content').innerHTML = data;
    })
    .catch(error => console.error('Error fetching content:', error));
})