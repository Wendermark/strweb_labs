import { createElements } from './pageConstructor.js';
import { shirts } from './shirts.js';

createElements(shirts);

const pageBtn = document.querySelectorAll('.page-btn');

pageBtn.forEach((btn, i) => btn.addEventListener('click', () => {
    localStorage.setItem('selectedShirt', JSON.stringify(shirts[i]));

    window.location.href = 'pages/details.html';
}));