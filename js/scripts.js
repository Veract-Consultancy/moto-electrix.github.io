var isVideoAdded = false;

function addVideo() {
    if (window.innerWidth >= 1200 && !isVideoAdded) {
        document.getElementById('video-container').innerHTML = `<video id="landingVideo" autoplay muted loop>
            <source src="assets/video/video-dark.mp4" type="video/mp4" />
        </video>`;
        isVideoAdded = true;
    }
}

addVideo();

// Add distinctive product content to the page
const productContentTemplate =
    `<div class="col">
        <div class="border rounded-4 product-group">
            <div class="py-5">
                <img
                    src="{imagePath}"
                    class="d-block w-100" alt="...">
            </div>
            <div
                class="border me-secondary-font rounded-4 text-center product-text me-secondary-color p-2">
                <h6>{productName}</h6>
                <p class="fs-7">{productContent}</p>
            </div>
        </div>
    </div>`;

const chargerProducts = [{
    imagePath: "assets/img/distinctiveproducts/chargers/owl_series.png",
    productName: "OWL SERIES",
    productContent: "3 socket AC charging stations for 2 & 3 wheelers"
},
{
    imagePath: "assets/img/distinctiveproducts/chargers/robin_series.png",
    productName: "ROBIN SERIES",
    productContent: "Single socket AC charging station for 2 & 3 wheelers"
},
{
    imagePath: "assets/img/distinctiveproducts/chargers/albatross_series.png",
    productName: "ALBATROSS SERIES",
    productContent: "3 socket AC charging stations for 2, 3 & 4 wheelers"
},
{
    imagePath: "assets/img/distinctiveproducts/chargers/hawk_series.png",
    productName: "HAWK SERIES",
    productContent: "Single cable personal AC charging station for 4 wheelers"
},
{
    imagePath: "assets/img/distinctiveproducts/chargers/eagle_series.png",
    productName: "EAGLE SERIES",
    productContent: "2 cable AC charging stations for 4 wheelers"
},
{
    imagePath: "assets/img/distinctiveproducts/chargers/hornbill_series.png",
    productName: "HORN BILL SERIES",
    productContent: "2 cable kerbside AC charging stations for 4 wheelers"
},
{
    imagePath: "assets/img/distinctiveproducts/chargers/falcon_series.png",
    productName: "FALCON SERIES",
    productContent: "Single cable AC charging stations for 4 wheelers"
},
{
    imagePath: "assets/img/distinctiveproducts/chargers/pelican_series.png",
    productName: "PELICAN SERIES",
    productContent: "Single cable DC charging station for 4 wheelers"
},
{
    imagePath: "assets/img/distinctiveproducts/chargers/pelican_pro_series.png",
    productName: "PELICAN PRO SERIES",
    productContent: "2 cable DC charging stations for 4 wheelers"
}];


var currentDeviceType = ""; // Tab or Desktop

function getDeviceType() {
    return window.innerWidth >= 1200 ? "Desktop" : "Tab";
}

function AddProducts() {
    const deviceType = getDeviceType();
    if (deviceType !== currentDeviceType) {
        currentDeviceType = deviceType;

        // Charger Product
        var chargerProductHtml = "";
        for (var i = 0; i < 12; i++) {
            if (deviceType === "Desktop" ||
                (i + 1) <= chargerProducts.length && deviceType === "Tab") {
                if (deviceType === "Tab" || (i % 4 === 0)) {
                    chargerProductHtml += `<div class='carousel-item${i === 0 ? ' active' : ''}'><div class='row'>`;
                }
                if ((i + 1) > chargerProducts.length) {
                    chargerProductHtml += "<div class='col'></div>";
                } else {
                    chargerProductHtml += productContentTemplate.replace(/{imagePath}/g, chargerProducts[i].imagePath)
                        .replace(/{productName}/g, chargerProducts[i].productName)
                        .replace(/{productContent}/g, chargerProducts[i].productContent);
                }
                if (deviceType === "Tab" || i % 4 === 3) {
                    chargerProductHtml = chargerProductHtml + "</div></div>";
                }
            }
        }
        document.getElementById("chargerContent").innerHTML = chargerProductHtml;

    }
}

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    const year = new Date().getFullYear();
    document.getElementById('year').innerHTML = year > 2021 ? year : 2022;

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    AddProducts();

    addEventListener('resize', _ => {
        addVideo();
        AddProducts()
    });
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
})();