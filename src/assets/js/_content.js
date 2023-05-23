export function renderPageContent(targetSection) {
    const contentDivs = document.querySelectorAll('.content');
    
    // console.log(contentDivs.getAttibute('id'));
    contentDivs.forEach(div => {
        div.style.display = 'none';
        // console.log(div.getAttribute('id') === 'project');
        // if(div.getAttribute('id') === 'project') {
        //     return div.style.display = 'block';
        // } else {
        //     return div.style.display = 'none';
        // }
    });

    targetSection.style.display = 'block';
    
    // Set initial display
    // const defaultSection = document.querySelector('.default');
    // defaultSection.style.display = 'block';
    // Hide the default section if it has the 'default' class
    const defaultSection = document.querySelector('.default');
    if (defaultSection) {
        defaultSection.style.display = 'none';
        defaultSection.classList.remove('default');
    }
}