document.addEventListener('DOMContentLoaded', function() {
    // Check if the user is logged in when the page loads
    if (sessionStorage.getItem('isLoggedIn') === 'true') {
        showLoggedInNavbar();
    } else {
        showLoggedOutNavbar();
    }

    // Function to display navbar for logged in users
    function showLoggedInNavbar() {
        document.getElementById('navbar-links').innerHTML = `
            <a href="index.html" class="nav-item nav-link active">Home</a>
            <a href="myaccount.html" class="nav-item nav-link">Profile</a>
            <a href="cart.html" class="nav-item nav-link">Cart</a>
            <a href="javascript:void(0);" class="nav-item nav-link" onclick="logoutUser()">Logout</a>
            <a href="donate.html" class="nav-item nav-link" style="color:#FFC107; font-weight: bold;">Donate</a>
        `;
    }

    // Function to display navbar for logged out users
    function showLoggedOutNavbar() {
        document.getElementById('navbar-links').innerHTML = `
            <a href="index.html" class="nav-item nav-link active">Home</a>
            <a href="about.html" class="nav-item nav-link">About</a>
            <a href="service.html" class="nav-item nav-link">Services</a>
            <a href="contact.html" class="nav-item nav-link">Contact</a>
            <a href="donate.html" class="nav-item nav-link" style="color:#FFC107; font-weight: bold;">Donate</a>
            <a href="javascript:void(0);" class="btn btn-primary py-4 px-lg-4 rounded-0 d-none d-lg-block" id="joinUsBtn">Join us
                <i class="fa fa-arrow-right ms-3"></i>
            </a>
            <div id="joinUsPopup" class="login-popup" style="display: none;">
                <a href="login.html" class="button-main w-full text-center">Login</a>
                <div class="text-secondary text-center mt-2 pb-3" style="font-size: large;">
                    Don’t have an account?
                    <a href="register.html" class="text-black pl-1 hover:underline">Register</a>
                </div>
                <div class="bottom pt-3 border-t border-line"></div>
                <a href="#!" class="body1 hover:underline">Support</a>
            </div>
        `;
    }

    // Example logout function
    function logoutUser() {
        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('username');
        showLoggedOutNavbar();
        window.location.href = 'index.html';
    }
});
