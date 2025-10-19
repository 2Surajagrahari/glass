document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const mobileOverlay = document.querySelector('.mobile-overlay');
    const dropdowns = document.querySelectorAll('.dropdown');
    const dropdownBtns = document.querySelectorAll('.dropdown-btn');

    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        mobileOverlay.classList.toggle('active');
        // Change icon based on menu state
        const icon = this.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when clicking overlay
    mobileOverlay.addEventListener('click', function () {
        navLinks.classList.remove('active');
        mobileOverlay.classList.remove('active');
        mobileMenuBtn.querySelector('i').classList.remove('fa-times');
        mobileMenuBtn.querySelector('i').classList.add('fa-bars');

        // Close all dropdowns when closing mobile menu
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    });

    // Toggle dropdowns on mobile
    dropdownBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            // On mobile, prevent default and toggle dropdown
            if (window.innerWidth <= 992) {
                e.preventDefault();
                const dropdown = this.parentElement;
                dropdown.classList.toggle('active');
            }
        });
    });

    // Handle dropdowns on desktop (hover)
    if (window.innerWidth > 992) {
        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('mouseenter', function () {
                this.classList.add('active');
            });

            dropdown.addEventListener('mouseleave', function () {
                this.classList.remove('active');
            });
        });
    }

    // Update dropdown behavior on window resize
    window.addEventListener('resize', function () {
        if (window.innerWidth > 992) {
            // Reset mobile menu if open
            navLinks.classList.remove('active');
            mobileOverlay.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
            mobileMenuBtn.querySelector('i').classList.add('fa-bars');

            // Reset dropdowns to hover behavior
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});