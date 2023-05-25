
import { fetchItem } from "./dataService";

export function initialize(link) {
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
