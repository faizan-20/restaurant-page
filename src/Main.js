const MainPage = (() => {
    const container = document.querySelector('#content');
    const home = document.createElement('div');
    home.classList.add('homeButton');
    container.appendChild(home);

    const header = document.createElement('div');
    header.classList.add('header');
    home.appendChild(header);

    const nav = document.createElement('div');
    nav.classList.add('nav');
    header.appendChild(nav);

    const navList = document.createElement('li');
    navList.classList.add('navList');
    nav.appendChild(navList);

    const navChild1 = document.createElement('ul');
    const navChild2 = document.createElement('ul');
    const navChild3 = document.createElement('ul');
    navChild1.classList.add('home');
    navChild2.classList.add('menu');
    navChild3.classList.add('contact');

    navList.append(navChild1);
    navList.append(navChild2);
    navList.append(navChild3);

    navChild1.textContent = 'Home';
    navChild2.textContent = 'Menu';
    navChild3.textContent = 'Contact';

    const heading = document.createElement('div');
    heading.classList.add('heading');
    heading.textContent = 'Catpucchin Cafe';
    nav.appendChild(heading);

    const main = document.createElement('div');
    main.classList.add('main');
    home.appendChild(main);
});

export default MainPage;