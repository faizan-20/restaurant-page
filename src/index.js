import MainPage from "./Main";
import HomePage from "./Home";
import MenuPage from "./Menu";
import ContactPage from "./Contact";

MainPage();
HomePage();

const home = document.querySelector('.home');
const menu = document.querySelector('.menu');
const contact = document.querySelector('.contact');

home.addEventListener('click', () => HomePage());
menu.addEventListener('click', () => MenuPage());
contact.addEventListener('click', () => ContactPage());
    