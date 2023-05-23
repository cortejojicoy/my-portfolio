import { renderPageContent } from './_content.js';

(function() {
    // const sidebarLinks = document.querySelectorAll('#sidebar a');
    const sidebarLinks = document.querySelectorAll('#nav li a');
    // const defaultLink = document.getElementById('#default');

    // defaultLink.addEventListener('click', () => {
    //     defaultSection.style.display = 'block';
    // });

    sidebarLinks.forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });

    function handleLinkClick(event) {
        event.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));
        // console.log(targetSection);
        renderPageContent(targetSection);
    }
})();