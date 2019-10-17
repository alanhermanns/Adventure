export const makeUser = (name) => {
    const user = {
        name: name,
        retentionFactor: 3,
    };
    const jsonUser = JSON.stringify(user);
    localStorage.setItem('USER', jsonUser);
};

export const getUser = () => {
    const user = JSON.parse(localStorage.getItem('USER'));
    return user;
};