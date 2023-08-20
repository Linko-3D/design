burger.addEventListener("click", () => {
    burger.classList.toggle("active");
});



const icons = document.querySelectorAll('.icon-select');
const departmentsSelect = document.getElementById('departments');
const searchContainer = document.getElementById('searchContainer');

icons.forEach(icon => {
    icon.addEventListener('click', () => {
        icons.forEach(icon => {
            icon.querySelector('.padding-highlight').classList.remove('active');
        });
        icon.querySelector('.padding-highlight').classList.add('active');

        // Toggle between select and input search
        if (departmentsSelect.style.display !== 'none') {
            departmentsSelect.style.display = 'none';
            searchContainer.style.display = 'block';
        } else {
            departmentsSelect.style.display = 'block';
            searchContainer.style.display = 'none';
        }
    });
});

