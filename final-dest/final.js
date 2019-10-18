setTimeout(() => {
    const meta = document.createElement('h1');
    meta.textContent = 'Meta';
    document.body.appendChild(meta);
    const button = document.createElement('button');
    button.textContent = 'Overly Meta : Clear Local Storage. Did This Detract from Your User Experience?';
    button.addEventListener('click', () => {
        localStorage.clear();
        window.location = '../home/index.html';
    });
    document.body.appendChild(button);
}, 2000);