const buttonPopupOpen = document.querySelectorAll('.button-popup-open');
const buttonPopupClose = document.querySelector('.button-popup-close');
const popup = document.querySelector('.popup');
const form = document.getElementById("requestForm");

buttonPopupOpen.forEach(btn => {
    btn.addEventListener('click', () => {
        popup.showModal();
    });
});

buttonPopupClose.addEventListener('click', () => {
    popup.close();
});

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const formObject = Object.fromEntries(formData.entries());
    const formJSON = JSON.stringify(formObject, null, 2);

    console.log('Данные формы:\n', formJSON);
    alert('Ваша заявка успешно отправлена, данные уже в консоле')
    popup.close();
});