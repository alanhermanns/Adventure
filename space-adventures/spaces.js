import manifolds from '../data/manifold.js';

const searchParams = new URLSearchParams(window.location.search);

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

    });
}