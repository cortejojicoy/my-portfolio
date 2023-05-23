
export function fetchItem() {
    return fetch('../data/main.json')
        .then(res => res.json())
        .catch(err => {
            console.log('Error fetching data:', err);
            throw err;
        });
}

