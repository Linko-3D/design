// Arrow ###################################################################################################

document.addEventListener("DOMContentLoaded", function () {
    const arrowTop = document.getElementById("arrow-top");

    window.addEventListener("scroll", function () {
      // Check the scroll position
      if (window.scrollY > 0) {
        // If the user has scrolled down, show the arrow
        arrowTop.style.display = "block";
      } else {
        // If the user is at the top of the page, hide the arrow
        arrowTop.style.display = "none";
      }
    });
  });

  // Toggle options ##########################################################

  // Get references to the icon and options elements
const toggleIcon = document.getElementById("toggle-options-icon");
const toggleOptions = document.getElementById("toggle-options");

// Add a click event listener to the icon
toggleIcon.addEventListener("click", function () {
  // Toggle the "hide" class on the options element
  toggleOptions.classList.toggle("hide");

  // Toggle the icon name between "chevron-forward" and "chevron-down"
  if (toggleIcon.getAttribute("name") === "chevron-forward") {
    toggleIcon.setAttribute("name", "chevron-down");
  } else {
    toggleIcon.setAttribute("name", "chevron-forward");
  }
});



// Theme switch ###############################################################

const moonIcon = document.getElementById('toggle-theme');
        const root = document.documentElement;

        moonIcon.addEventListener('click', () => {
            moonIcon.classList.toggle('moon-outline');

            if (moonIcon.classList.contains('moon-outline')) {
                // Toggle to light theme
                root.style.setProperty('--background-color', 'rgb(255, 255, 255)');
                root.style.setProperty('--panel-color', 'rgb(229, 229, 229)');
                root.style.setProperty('--color', 'black');

                root.style.setProperty('--red', 'rgb(205, 56, 56)');
                root.style.setProperty('--green', 'rgb(47, 161, 57)');
                root.style.setProperty('--blue', 'rgb(61, 100, 221)');
                root.style.setProperty('--violet', 'rgb(168, 93, 233)');
                root.style.setProperty('--yellow', 'rgb(166, 144, 66)');

            } else {
                // Toggle to dark theme
                root.style.setProperty('--background-color', 'rgb(37, 43, 52)');
                root.style.setProperty('--panel-color', 'rgb(54, 61, 74)');
                root.style.setProperty('--color', 'white');

                root.style.setProperty('--red', 'rgb(252, 127, 127)');
                root.style.setProperty('--green', 'rgb(142, 239, 151)');
                root.style.setProperty('--blue', 'rgb(141, 165, 243)');
                root.style.setProperty('--violet', 'rgb(195, 142, 241)');
                root.style.setProperty('--yellow', 'rgb(255, 222, 102)');
            }
        });