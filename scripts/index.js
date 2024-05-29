// TOGGLE FILE MANAGER VISIBILITY START
var button = document.getElementById("home_button_listener");
var is_expanded = false;

button.addEventListener("click", function() {

    // Component fetch
    var grid_container = document.querySelector(".grid_container");
    var folders = document.querySelectorAll(".folder");
    var folder_contents = document.querySelectorAll(".folder_contents");

    if (is_expanded) {
        // Toggle width and visibility to file manager
        grid_container.style.gridTemplateColumns = "10% 90%";
        folders.forEach(folder => folder.style.display = "none"); 
        folder_contents.forEach(folder_contents => folder_contents.style.display = "none");

        console.log("Shrink file manager");
    } else {
        // Toggle width and visibility of file manager
        grid_container.style.gridTemplateColumns = "30% 70%";
        folders.forEach(folder => folder.style.display = "flex"); 

        console.log("Expand file manager");

        // FETCH FOLDER STATES ABOUT ME START
        if (about_me_folder_open == true) {
            about_me_folder_contents.style.display = "flex";
        } else {
            about_me_folder_contents.style.display = "none";
        }
        // FETCH FOLDER STATES ABOUT ME END

        // FETCH FOLDER STATES PROJECTS START
        if (projects_folder_open == true) {
            projects_folder_contents.style.display = "flex";
        } else {
            projects_folder_contents.style.display = "none";
        }
        // FETCH FOLDER STATES PROJECTS END

        // FETCH RESUME STATES PROJECTS START
        if (resume_folder_open == true) {
            resume_folder_contents.style.display = "flex";
        } else {
            resume_folder_contents.style.display = "none";
        }
        // FETCH RESUME STATES PROJECTS END

        // FETCH RESUME STATES PROJECTS START
        if (contact_me_folder_open == true) {
            contact_me_folder_contents.style.display = "flex";
        } else {
            contact_me_folder_contents.style.display = "none";
        }
        // FETCH RESUME STATES PROJECTS END
    }

    is_expanded = !is_expanded;
});
// TOGGLE FILE MANAGER VISIBILITY END

// ABOUT ME FOLDER START
var about_me_folder_open = false;
var about_me_folder = document.getElementById("folder_button_about_me_listener")
var about_me_folder_contents = document.getElementById("about_me_folder_contents");

about_me_folder.addEventListener("click", function() {
    about_me_folder_open = ! about_me_folder_open;

    console.log("About me folder -> Open = " + about_me_folder_open);

    // ABOUT ME FOLDER IMAGE AND VISIBILITY START
    var about_me_chevron_image = document.getElementById("about_me_chevron");
    if (about_me_folder_open == true) {
        var chevron_down_image_path = "assets/svg/chevron down icon.svg";
                
        about_me_chevron_image.src = chevron_down_image_path;

        about_me_folder_contents.style.display = "flex";
    } else {
        var chevron_right_image_path = "assets/svg/chevron right icon.svg";
                
        about_me_chevron_image.src = chevron_right_image_path;

        about_me_folder_contents.style.display = "none";
    }
    // ABOUT ME FOLDER IMAGE AND VISIBILITY START
})
// ABOUT ME FOLDER END

// PROJECTS FOLDER START
var projects_folder_open = false;
var projects_folder = document.getElementById("folder_button_projects_listener")
var projects_folder_contents = document.getElementById("projects_folder_contents");

projects_folder.addEventListener("click", function() {
    projects_folder_open = !projects_folder_open;

    console.log("Project folder -> Open = " + projects_folder_open);

    // PROJECTS FOLDER IMAGE AND VISIBILITY START
    var projects_chevron_image = document.getElementById("projects_chevron");
    if (projects_folder_open == true) {
        var chevron_down_image_path = "assets/svg/chevron down icon.svg";
                
        projects_chevron_image.src = chevron_down_image_path;

        projects_folder_contents.style.display = "flex";

    } else {
        var chevron_right_image_path = "assets/svg/chevron right icon.svg";
                
        projects_chevron_image.src = chevron_right_image_path;

        projects_folder_contents.style.display = "none";
    }
    // PROJECTS FOLDER IMAGE AND VISIBILITY START
})
// PROJECTS FOLDER END

// RESUME FOLDER START
var resume_folder_open = false;
var resume_folder = document.getElementById("folder_button_resume_listener")
var resume_folder_contents = document.getElementById("resume_folder_contents");

resume_folder.addEventListener("click", function() {
    resume_folder_open = !resume_folder_open;

    console.log("Resume folder -> Open = " + resume_folder_open);

    // RESUME FOLDER IMAGE AND VISIBILITY START
    var resume_chevron_image = document.getElementById("resume_chevron");
    if (resume_folder_open == true) {
        var chevron_down_image_path = "assets/svg/chevron down icon.svg";
                
        resume_chevron_image.src = chevron_down_image_path;

        resume_folder_contents.style.display = "flex";
    } else {
        var chevron_right_image_path = "assets/svg/chevron right icon.svg";
                
        resume_chevron_image.src = chevron_right_image_path;

        resume_folder_contents.style.display = "none";
    }
    // RESUME FOLDER IMAGE AND VISIBILITY START
})
// RESUME ME FOLDER END

// CONTACT ME FOLDER START
var contact_me_folder_open = false;
var contact_me_folder = document.getElementById("folder_button_contact_listener")
var contact_me_folder_contents = document.getElementById("contact_folder_contents");

contact_me_folder.addEventListener("click", function() {
    contact_me_folder_open = !contact_me_folder_open;

    console.log("Contact me folder -> Open = " + contact_me_folder_open);

    // RESUME FOLDER IMAGE AND VISIBILITY START
    var contact_me_chevron_image = document.getElementById("contact_chevron");
    if (contact_me_folder_open == true) {
        var chevron_down_image_path = "assets/svg/chevron down icon.svg";
                
        contact_me_chevron_image.src = chevron_down_image_path;

        contact_me_folder_contents.style.display = "flex";
    } else {
        var chevron_right_image_path = "assets/svg/chevron right icon.svg";
                
        contact_me_chevron_image.src = chevron_right_image_path;

        contact_me_folder_contents.style.display = "none";
    }
    // RESUME FOLDER IMAGE AND VISIBILITY START
})
// CONTACT ME FOLDER END
