document.addEventListener("DOMContentLoaded", function () {
    // Welcome message
    console.log("Welcome to MODULUX22!");
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
    // Fashion enquiry button
    const enquiryButton = document.querySelector(
        '#contact .button'
    );
    if (enquiryButton) {
        enquiryButton.addEventListener("click", function () {
            alert(
                "Thank you for your interest in MODULUX22! " +
                "Please contact us to discuss your fashion design."
            );
        });
    }
});
