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

  // Burger-menu ############################################################################################

  // Get references to the icon and menu elements
  const menuIcon = document.getElementById('menu-icon');
  const menu = document.getElementById('menu');

  // Add a click event listener to the icon
  menuIcon.addEventListener('click', function() {
      // Toggle the 'active' class on the icon
      menuIcon.classList.toggle('active');

      // Toggle the 'active' class on the menu
      menu.classList.toggle('active');

      // Check if the icon has the 'active' class and update the 'name' attribute accordingly
      if (menuIcon.classList.contains('active')) {
          menuIcon.setAttribute('name', 'close-outline');
          // Disable scrolling when the menu is active
          document.body.style.overflow = 'hidden';
      } else {
          menuIcon.setAttribute('name', 'menu-outline');
          // Enable scrolling when the menu is not active
          document.body.style.overflow = 'auto';
      }
  });