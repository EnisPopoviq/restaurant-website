document.addEventListener("DOMContentLoaded", function () {
    // Navbar color change on scroll
    const navbar = document.querySelector("nav");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "White"; // Darker red
            navbar.style.transition = "background 0.8s";
        } else {
            navbar.style.backgroundColor = "#f5f5dc"; // Original color
        }
    });

    // Smooth scroll animations
    const sections = document.querySelectorAll("section");
    
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = "translateY(0)";
                }
            });
        },
        { threshold: 0.2 }
    );

    sections.forEach((section) => {
        section.style.opacity = 0;
        section.style.transform = "translateY(50px)";
        section.style.transition = "opacity 0.8s, transform 0.8s";
        observer.observe(section);
    });

    // Menu item hover effect
    const menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((item) => {
        item.addEventListener("mouseover", function () {
            item.style.transform = "scale(1.05) rotate(1deg)";
            item.style.transition = "transform 0.3s";
        });
        item.addEventListener("mouseout", function () {
            item.style.transform = "scale(1)";
        });
    });

    // Dark Mode Toggle
   
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Form validation
    document.getElementById("reservationForm").addEventListener("submit", function (event) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        if (name === "" || email === "" || phone === "") {
            alert("Please fill in all required fields.");
            event.preventDefault();
        }
    });

    window.addEventListener("load", function() {
        var loadingScreen = document.getElementById("loading-screen");
        var mainContent = document.getElementById("main-content");
    
        setTimeout(function() {
            document.body.classList.add('loaded');  
            
            // Completely remove the loading screen from the DOM
            loadingScreen.style.display = "none";  
            loadingScreen.remove(); 
    
            // Show main content smoothly
            mainContent.style.display = "block";
            mainContent.style.opacity = "1";  
        }, 4000);  
    });

    const screen = document.getElementById("section");
    const mirror = document.getElementById("about");
        if(screenY > 30);
        screen.document = screen;
        if (screenY < 30);
        screen.document != screen;



});



