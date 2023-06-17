const ContactPage = (() => {
    const main = document.querySelector('.main');
    main.innerHTML = "";

    const contact = document.createElement('div');
    contact.classList.add('contact-info');
    main.appendChild(contact);
    contact.textContent = 'Here be some contact information';
});

export default ContactPage;