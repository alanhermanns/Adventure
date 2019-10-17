export const renderLinks = (manifolds) => {
    for (let i = 0; i < manifolds.length; i++) {
        const link = document.createElement('a');
        link.href = '../data/manifold/?=id' + manifolds[i].id;
        link.textContent = manifolds[i].title;
        link.style.top = manifolds[i].top;
        link.style.left = manifolds[i].left;
        document.body.appendChild(link);
    }
};
export const makeForm = () => {
    const form = document.createElement('form');
    //form.type = 'text';
    form.style.width = '400px';
    //const label = document.createElement('label');
    //label.classList.add('form');
    //form.appendChild(label);
    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'name';
    form.appendChild(input);
    //const button = document.createElement('button');
    //form.appendChild(button);
    document.body.appendChild(form);
    console.log(input);
    return form;
};
