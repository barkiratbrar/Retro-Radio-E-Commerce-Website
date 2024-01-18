// Wait for the DOM content to be fully loaded before executing the code
document.addEventListener('DOMContentLoaded', () => {
    // Select the wrapper element
    const wrapper = document.querySelector('.wrapper');
    // Select the login link inside the login-register section
    const loginLink = document.querySelector('.login-register a.login-link');
    // Select the register link inside the login-register section
    const registerLink = document.querySelector('.login-register a.register-link');
    // Select the login button
    const btnPopup = document.querySelector('.btnlogin-popup');
    // Select the close icon for the popup
    const iconClose = document.querySelector('.icon-close');
    // Select the navigation bar
    var nav = document.querySelector("nav");

    // Add click event listener to the register link
    registerLink.addEventListener('click', () => {
        wrapper.classList.add('active');
    });

    // Add click event listener to the login link
    loginLink.addEventListener('click', () => {
        wrapper.classList.remove('active');
    });

    // Add click event listener to the popup button
    btnPopup.addEventListener('click', () => {
        wrapper.classList.add('active-popup');
    });

    // Add click event listener to the close icon of the popup
    iconClose.addEventListener('click', () => {
        wrapper.classList.remove('active-popup');
    });

    // Add scroll event listener to the window
    window.addEventListener("scroll", function(){
        // Toggle the "sticky" class on the navigation bar based on the scroll position
        nav.classList.toggle("sticky", window.scrollY > 0);
    });

    // Select the toggle password visibility element and password input elements
    const togglePasswordVisibility = document.getElementById('togglePasswordVisibility','register-togglePasswordVisibility');
    const PasswordInput = document.getElementById('password','register-password');
    
    // Add click event listener to toggle password visibility
    togglePasswordVisibility.addEventListener('click', function() {
        // Toggle the password input type between "password" and "text"
        if (PasswordInput.type === 'password') {
            PasswordInput.type = 'text';
            togglePasswordVisibility.name = 'eye-off';
        } else {
            PasswordInput.type = 'password';
            togglePasswordVisibility.name = 'eye';
        }
    });
});
