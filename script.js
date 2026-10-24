
let contentArea = document.getElementById("contentArea");
let myImage = document.getElementById("myImage");
let heading = document.getElementById("heading");
let alternateHeading = document.getElementById("alternateHeading");

// When the mouse enters the content area
contentArea.addEventListener("mouseover", function(event) {
    if (!contentArea.contains(event.relatedTarget)) {
        myImage.src =
            "Picsart_25-01-04_19-31-34-132.jpg";

        myImage.alt = "Alternate image";

        heading.hidden = true;
        alternateHeading.hidden = false;
    }
});

// When the mouse leaves the content area
contentArea.addEventListener("mouseout", function(event) {
    if (!contentArea.contains(event.relatedTarget)) {
        myImage.src =
            "Picsart_24-12-23_19-17-32-510.jpg";

        myImage.alt = "Original image";

        heading.hidden = false;
        alternateHeading.hidden = true;
    }
});
