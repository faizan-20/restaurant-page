const MenuPage = (() => {
    const main = document.querySelector('.main');
    main.innerHTML = "";

    const menu = document.createElement('div');
    menu.classList.add('menu-items');
    main.appendChild(menu);
    menu.textContent = "Here Be Some menu (Will update soon)";
});

export default MenuPage;