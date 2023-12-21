const form = document.querySelector('form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const returnsLocalStorage = localStorage.getItem('feedback-form-state');

const formDataObject = {
    email: '',
    message: '',
};

if (window.localStorage.length >= 1) {
    const targetForm = JSON.parse(returnsLocalStorage);
    input.value = targetForm.email.trim();
    textarea.value = targetForm.message.trim();
}

form.addEventListener('input', event => {
    formDataObject[event.target.name] = event.target.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formDataObject));
});

form.addEventListener('submit', event => {
    event.preventDefault();
    if (input.value && textarea.value) {
        const savedThemeFar = localStorage.getItem('feedback-form-state');

        console.log(JSON.parse(savedThemeFar));
        localStorage.removeItem('feedback-form-state');
        form.reset();
    } else {
        alert('Please fill in the form field');
    }
});
