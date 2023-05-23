
import { fetchItem } from "./dataService";

export function initialize() {
    const dataContainer = document.getElementById('dataContainer');

    fetchItem()
        .then(data => {
            // Process the JSON data
            const html = generateHTML(data);
            // Update the HTML container
            dataContainer.innerHTML = html;
        })
        .catch(err => {
            // Handle any errors
            console.error('Error initializing:', err);
        });
}


function generateHTML(data) {
    let html = '';

    const dataArray = [];
    for(let i=0; i<data.length; i++) {
        // const d = data[i];
        dataArray.push(data[i]);
    }
    // console.log(dataArray);
    dataArray[0].project.map((item) => {
        html += `<li>${item.title}</li>`;
    })

    // for(let item of data) {
    //     console.log(item.project)
    //     // html += `<li>${item.title}</li>`;
    // }
    return html;
}