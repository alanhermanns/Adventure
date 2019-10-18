import manifolds from '../data/manifold.js';
import { getUser } from '../data/makeandtakeuser.js';
import { makeUserStatsInNavBar } from './utils.js';
import { renderLinks } from '../home/utils.js';

const searchParams = new URLSearchParams(window.location.search);
let user = getUser();
if (!user){
    setTimeout(() => {
        alert('ERROR: GO ENTER YOUR ACTUAL NAME; YOU CANT ENTER THE GAME WITHOUT A NAME, THATS A FACT.');
        window.location = '../home/index.html';
    }, 1000);
}
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
        let previousStats = document.body.querySelector('h2');
        document.body.removeChild(previousStats);
        //debugger;
        makeUserStatsInNavBar(user);
        let newManifolds = [];
        for (let d = 0; d < manifolds.length; d++){
            if (manifold.time === manifolds[d].time && manifold.id !== manifolds[d].id){
                newManifolds.push(manifolds[d]);
            }
        }
        if (user.retentionfactor !== 0){
            let homeLink = document.createElement('a');
            homeLink.href = '../home/index.html';
            homeLink.textContent = 'Return to a flat plane, home.';
            document.body.appendChild(homeLink);
        }
        renderLinks(newManifolds);
        if (user.retentionFactor <= 0) {
            setTimeout(() => {
                window.location = '../final-dest/index.html';
            }, 2000);
        }
    });
}
const bodyBackgroundImage = manifold.backgroundImage;
document.body.style = 'background-image: url(' + bodyBackgroundImage + ')';


