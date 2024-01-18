// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', () => {
    // Get references to elements
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-register a.login-link'); 
    const registerLink = document.querySelector('.login-register a.register-link'); 
    const btnPopup = document.querySelector('.btnlogin-popup');
    const iconClose = document.querySelector('.icon-close');
    var nav = document.querySelector("nav");

    // Event listener for clicking the "Register" link
    registerLink.addEventListener('click', () => {
        wrapper.classList.add('active');
    });

    // Event listener for clicking the "Login" link
    loginLink.addEventListener('click', () => {
        wrapper.classList.remove('active');
    });

    // Event listener for clicking the login popup button
    btnPopup.addEventListener('click', () => {
        wrapper.classList.add('active-popup');
    });

    // Event listener for clicking the close icon in the popup
    iconClose.addEventListener('click', () => {
        wrapper.classList.remove('active-popup');
    });

    // Event listener for scrolling to toggle sticky navigation bar
    window.addEventListener("scroll", function(){
        nav.classList.toggle("sticky", window.scrollY > 0);
    });

    // Event listener for toggling password visibility
    const togglePasswordVisibility = document.getElementById('togglePasswordVisibility','register-togglePasswordVisibility');
    const PasswordInput = document.getElementById('password','register-password');
    
    togglePasswordVisibility.addEventListener('click', function() {
        if (PasswordInput.type === 'password') {
            PasswordInput.type = 'text';
            togglePasswordVisibility.name = 'eye-off';
        } else {
            PasswordInput.type = 'password';
            togglePasswordVisibility.name = 'eye';
        }
    });
});


document.getElementById("call").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior

    alert("You are about to call +1 (437) 434-0073");
});
