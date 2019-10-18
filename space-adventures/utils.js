export const makeUserStatsInNavBar = (user) => {
    let stats = document.createElement('h2');
    stats.textContent = user.name + ' Retention Factor: ' + user.retentionFactor;
    stats.classList.add('user-stats');
    document.body.appendChild(stats);
};