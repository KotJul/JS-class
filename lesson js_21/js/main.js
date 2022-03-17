const form = document.forms[0];
const firstNameInput = document.body.querySelector('#validationCustom01'); /*если длина меньше трех то красным, если больше 3символов, то зеленый*/
firstNameInput.addEventListener('input', function () {
    if (this.value.length > 3) {
        this.classList.remove('is-invalid');
        this.classList.add('is-valid');
        this.nextElementSibling.className = 'valid-feedback';
        this.nextElementSibling.textContent = 'GOOD';

    } else {
        this.classList.remove('is-valid');
        this.classList.add('is-invalid');
        this.nextElementSibling.className = 'invalid-feedback';
        this.nextElementSibling.textContent = 'First name > 3!!!!';
    }
})
const lastNameInput = document.body.querySelector('#validationCustom02'); /*если в строке есть пробелы, будет ошибка*/
lastNameInput.addEventListener('input', function () {
    if (this.value.includes(' ')) {
        this.classList.add('is-invalid');
        this.classList.remove('is-valid');
    } else {
        this.classList.remove('is-invalid');
        this.classList.add('is-valid');
    }
})
const zip = document.body.querySelector('#validationCustom05');
zip.addEventListener('input', function () {
    if (this.value === Number.parseInt(this.value).toString()) {
        /*зеленое если только цифры, если буквы а потом цифры, будет красным*/
        this.classList.add('is-valid');
        this.classList.remove('is-invalid');
    } else {
        this.classList.remove('is-valid');
        this.classList.add('is-invalid');
    }
})
// const option = document.body.querySelector('#validationCustom04');
// const select = document.body.querySelector('select');

// function validateSelect() {
//     if (select.selectedIndex > 0) {
//         return
//     } else {
//         form.addEventListener('submit', (event) => {
//             event.preventDefault() /*форма не отправиться*/
//         })
//     }
// }