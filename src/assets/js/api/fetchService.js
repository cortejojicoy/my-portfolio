
import { fetchItem } from "./dataService";

export function initialize(link) {
    const projectContainer = document.getElementById('projectContainer');
    const aboutContainer = document.getElementById('aboutContainer');

    // console.log(link)
    fetchItem()
        .then(data => {
            // Process the JSON data
            const html = generateHTML(data, link);
            // Update the HTML container
            console.log(link)
            projectContainer.innerHTML = html;
        })
        .catch(err => {
            // Handle any errors
            console.error('Error initializing:', err);
        });
}


function generateHTML(data, link) {
    let html = '';

    const dataArray = [];
    for(let i=0; i<data.length; i++) {
        // const d = data[i];
        dataArray.push(data[i]);
    }
    // console.log(dataArray);
    // dataArray[0].project.map((item) => {
    //     html += `<li>${item.title}</li>`;
    // })

    dataArray.map((item) => {
        console.log(item.project)
    })


    // if(link == '#project') {
    //     // console.log(dataArray)
    //     dataArray[0].project.map((item) => {
    //         html += `<li>${item.title}</li>`;
    //     })
        
    // }
    
    // if(link == '#about') {
    //     // console.log(dataArray[1].about.text)
    //     html += `<li>${dataArray[1].about.text}</li>`;
    // }
    
    // else {
    //     html += ''
    // }
    // for(let item of data) {
    //     console.log(item.project)
    //     // html += `<li>${item.title}</li>`;
    // }
    return html;
}
