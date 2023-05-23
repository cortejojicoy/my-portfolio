import { initialize } from './api/fetchService';
import { fetchItem } from './api/dataService';

document.addEventListener('DOMContentLoaded', function(){
    initialize();
    fetchItem();
    // console.log(fetchService);
}); 