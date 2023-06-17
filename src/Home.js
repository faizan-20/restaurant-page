const HomePage = (() => {
    const main = document.querySelector('.main');
    main.innerHTML = '';

    const about = document.createElement('div');
    about.classList.add('about');
    main.appendChild(about);
    about.textContent = "About: Some random placeholder text that is long enough to see what's going on. note to self: PLEASE UPDATE IT";
});

export default HomePage;