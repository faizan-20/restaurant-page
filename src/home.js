const HomePage = (() => {
    const container = document.querySelector('#content');
    const header = document.createElement('div');
    header.classList.add('header');
    container.appendChild(header);

    const nav = document.createElement('div');
    nav.classList.add('nav');
    header.appendChild(nav);

    const navList = document.createElement('li');
    navList.classList.add('navList');
    nav.appendChild(navList);

    const navChild1 = document.createElement('ul');
    const navChild2 = document.createElement('ul');
    const navChild3 = document.createElement('ul');

    navList.append(navChild1);
    navList.append(navChild2);
    navList.append(navChild3);

    navChild1.textContent = 'Home';
    navChild2.textContent = 'Menu';
    navChild3.textContent = 'Contact';

    const heading = document.createElement('div');
    heading.classList.add('heading');
    heading.textContent = 'Catpucchin Cafe';
    header.appendChild(heading);

    const main = document.createElement('div');
    main.classList.add('main');
    container.appendChild(main);

    const about = document.createElement('div');
    about.classList.add('about');
    main.appendChild(about);
    about.textContent = "About: Some random placeholder text that is long enough to see what's going on. note to self: PLEASE UPDATE IT";
});

export default HomePage;