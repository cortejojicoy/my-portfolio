function renderPageContent(targetSection) {
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
document.addEventListener('DOMContentLoaded', function(){
    initialize();
    fetchItem();
    // console.log(fetchService);
}); 

function initialize(link) {
    fetchItem()
        .then(data => {
            // Process the JSON data
            generateHTML(data, link);
        })
        .catch(err => {
            // Handle any errors
            console.error('Error initializing:', err);
        });
}


function generateHTML(data, link) {
    let html = '';

    const dataArray = [];
    for (let i=0; i<data.length; i++) {
        const obj = data[i];
        for (const key in obj) {
            if(key == link) {
                dataArray.push(obj[key])
            }
        }
    }

    for (const arr of dataArray) {
        arr.map((item) => {
            html += `<li>${item.text}</li>`;
        })
    }

    // Update the HTML container
    if(link == 'project') {
        const projectContainer = document.querySelector('.projectContainer');
        return projectContainer.innerHTML = html;
    } else if(link == 'about') {
        const aboutContainer = document.querySelector('.aboutContainer');
        return aboutContainer.innerHTML = html;
    } else {
        return html = '';
    }
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9jb250ZW50LmpzIiwiX3NpZGViYXIuanMiLCJtYWluLmpzIiwiYXBpL2ZldGNoU2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gcmVuZGVyUGFnZUNvbnRlbnQodGFyZ2V0U2VjdGlvbikge1xuICAgIGNvbnN0IGNvbnRlbnREaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRlbnQnKTtcbiAgICBcbiAgICAvLyBjb25zb2xlLmxvZyhjb250ZW50RGl2cy5nZXRBdHRpYnV0ZSgnaWQnKSk7XG4gICAgY29udGVudERpdnMuZm9yRWFjaChkaXYgPT4ge1xuICAgICAgICBkaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGl2LmdldEF0dHJpYnV0ZSgnaWQnKSA9PT0gJ3Byb2plY3QnKTtcbiAgICAgICAgLy8gaWYoZGl2LmdldEF0dHJpYnV0ZSgnaWQnKSA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICAgIC8vICAgICByZXR1cm4gZGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgcmV0dXJuIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAvLyB9XG4gICAgfSk7XG5cbiAgICB0YXJnZXRTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIFxuICAgIC8vIFNldCBpbml0aWFsIGRpc3BsYXlcbiAgICAvLyBjb25zdCBkZWZhdWx0U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWZhdWx0Jyk7XG4gICAgLy8gZGVmYXVsdFNlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgLy8gSGlkZSB0aGUgZGVmYXVsdCBzZWN0aW9uIGlmIGl0IGhhcyB0aGUgJ2RlZmF1bHQnIGNsYXNzXG4gICAgY29uc3QgZGVmYXVsdFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVmYXVsdCcpO1xuICAgIGlmIChkZWZhdWx0U2VjdGlvbikge1xuICAgICAgICBkZWZhdWx0U2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkZWZhdWx0U2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdkZWZhdWx0Jyk7XG4gICAgfVxufSIsImltcG9ydCB7IHJlbmRlclBhZ2VDb250ZW50IH0gZnJvbSAnLi9fY29udGVudC5qcyc7XG5cbihmdW5jdGlvbigpIHtcbiAgICAvLyBjb25zdCBzaWRlYmFyTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc2lkZWJhciBhJyk7XG4gICAgY29uc3Qgc2lkZWJhckxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI25hdiBsaSBhJyk7XG4gICAgLy8gY29uc3QgZGVmYXVsdExpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnI2RlZmF1bHQnKTtcblxuICAgIC8vIGRlZmF1bHRMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vICAgICBkZWZhdWx0U2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAvLyB9KTtcblxuICAgIHNpZGViYXJMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlTGlua0NsaWNrKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUxpbmtDbGljayhldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHRhcmdldFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJykpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0YXJnZXRTZWN0aW9uKTtcbiAgICAgICAgcmVuZGVyUGFnZUNvbnRlbnQodGFyZ2V0U2VjdGlvbik7XG4gICAgfVxufSkoKTsiLCJpbXBvcnQgeyBpbml0aWFsaXplIH0gZnJvbSAnLi9hcGkvZmV0Y2hTZXJ2aWNlJztcbmltcG9ydCB7IGZldGNoSXRlbSB9IGZyb20gJy4vYXBpL2RhdGFTZXJ2aWNlJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCl7XG4gICAgaW5pdGlhbGl6ZSgpO1xuICAgIGZldGNoSXRlbSgpO1xuICAgIC8vIGNvbnNvbGUubG9nKGZldGNoU2VydmljZSk7XG59KTsgIiwiXG5pbXBvcnQgeyBmZXRjaEl0ZW0gfSBmcm9tIFwiLi9kYXRhU2VydmljZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZShsaW5rKSB7XG4gICAgZmV0Y2hJdGVtKClcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAvLyBQcm9jZXNzIHRoZSBKU09OIGRhdGFcbiAgICAgICAgICAgIGdlbmVyYXRlSFRNTChkYXRhLCBsaW5rKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAvLyBIYW5kbGUgYW55IGVycm9yc1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW5pdGlhbGl6aW5nOicsIGVycik7XG4gICAgICAgIH0pO1xufVxuXG5cbmZ1bmN0aW9uIGdlbmVyYXRlSFRNTChkYXRhLCBsaW5rKSB7XG4gICAgbGV0IGh0bWwgPSAnJztcblxuICAgIGNvbnN0IGRhdGFBcnJheSA9IFtdO1xuICAgIGZvciAobGV0IGk9MDsgaTxkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IGRhdGFbaV07XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgICAgICAgICAgaWYoa2V5ID09IGxpbmspIHtcbiAgICAgICAgICAgICAgICBkYXRhQXJyYXkucHVzaChvYmpba2V5XSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgYXJyIG9mIGRhdGFBcnJheSkge1xuICAgICAgICBhcnIubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBodG1sICs9IGA8bGk+JHtpdGVtLnRleHR9PC9saT5gO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIFVwZGF0ZSB0aGUgSFRNTCBjb250YWluZXJcbiAgICBpZihsaW5rID09ICdwcm9qZWN0Jykge1xuICAgICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RDb250YWluZXInKTtcbiAgICAgICAgcmV0dXJuIHByb2plY3RDb250YWluZXIuaW5uZXJIVE1MID0gaHRtbDtcbiAgICB9IGVsc2UgaWYobGluayA9PSAnYWJvdXQnKSB7XG4gICAgICAgIGNvbnN0IGFib3V0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0Q29udGFpbmVyJyk7XG4gICAgICAgIHJldHVybiBhYm91dENvbnRhaW5lci5pbm5lckhUTUwgPSBodG1sO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBodG1sID0gJyc7XG4gICAgfVxufVxuIl19
