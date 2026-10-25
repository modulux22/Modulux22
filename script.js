document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to Hakeemat Couture!");

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

    // Fashion enquiry button alert
    const enquiryButton = document.querySelector('#contact .btn-whatsapp, #contact .btn');
    if (enquiryButton) {
        enquiryButton.addEventListener("click", function () {
            alert(
                "Thank you for your interest in Hakeemat Couture! " +
                "Please contact us on WhatsApp to discuss your luxury fashion design."
            );
        });
    }

    // Image loading check (helps debug if a .JPG extension doesn't match)
    const galleryImages = document.querySelectorAll('.gallery-grid img');
    galleryImages.forEach(function (img, index) {
        img.onerror = function () {
            console.warn(`Image ${index + 1} failed to load. Check if your file extension on GitHub is .JPG or .jpeg: ${img.src}`);
        };
    });
});
