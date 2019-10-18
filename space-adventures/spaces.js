import manifolds from '../data/manifold.js';
import { getUser } from '../data/makeandtakeuser.js';
import { makeUserStatsInNavBar } from './utils.js';

const searchParams = new URLSearchParams(window.location.search);
let user = getUser();
makeUserStatsInNavBar(user);

const manifoldId = searchParams.get('id');
//const backgroundImage = searchParams.backgroundImage;
let manifold;

for (let i = 0; i < manifolds.length; i++){ 
    if (manifoldId === manifolds[i].id){
        manifold = manifolds[i];
    }
}
// const appliedBackgroundImage = 'background-image: url(' + backgroundImage + ')';
// document.body.style = appliedBackgroundImage;
const header = document.createElement('h1');
header.textContent = manifold.title;
document.body.appendChild(header);

const choicesList = document.createElement('form');
for (let i = 0; i < manifold.choices.length; i++) {
    let aLabel = document.createElement('label');
    aLabel.textContent = manifold.choices[i].description;

    let aChoice = document.createElement('input');
    aChoice.type = 'radio';
    aChoice.name = 'choice';
    aChoice.value = manifold.choices[i].id;
    
    //let aDescription = document.createElement('p');
    choicesList.appendChild(aLabel);
    aLabel.appendChild(aChoice);
}
document.body.appendChild(choicesList);

const radiOs = choicesList.querySelectorAll('input');

for (let i = 0; i < radiOs.length; i++){
    radiOs[i].addEventListener('click', () => {
        let results = document.createElement('p');
        results.textContent = manifold.choices[i].result; 
        document.body.appendChild(results);
        user.retentionFactor = user.retentionFactor + manifold.choices[i].retentionFactor;
        choicesList.classList.add('hidden');
        localStorage.setItem('USER', JSON.stringify(user));
        user = getUser();
        makeUserStatsInNavBar(user);
        if (user.retentionFactor <= 0) {
            setTimeout(() => {
                window.location = '../final-dest/index.html';
            }, 2000);
        }
    });
}
const bodyBackgroundImage = manifold.backgroundImage;
document.body.style = 'background-image: url(' + bodyBackgroundImage + ')';


