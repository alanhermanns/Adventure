import manifolds from '../data/manifold.js';
import { renderLinks, makeForm } from './utils.js';
import { makeUser, getUser } from '../data/makeandtakeuser.js';

const homeBody = document.querySelector('body');
homeBody.classList.add('background');
const mainHeader = document.createElement('h1');
mainHeader.textContent = 'Welcome Home';
homeBody.appendChild(mainHeader);
mainHeader.classList.add('bold');

let player = getUser();

if (!player){
    makeForm();
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let formData = new FormData(form);
        const name = formData.get('name');
        makeUser(name);
        form.classList.add('hidden');
        const lowerSpace = document.createElement('p');
        lowerSpace.textContent = 'Name:' + ' ' + JSON.stringify(name) + '. ' + 'You\'re on flat ground';
        document.body.appendChild(lowerSpace);

    });
}
renderLinks(manifolds);














