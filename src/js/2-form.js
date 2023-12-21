const form = document.querySelector('form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const returnsLocalStorage = localStorage.getItem('feedback-form-state');

try {
    console.log(!returnsLocalStorage);
    const targetForm = JSON.parse(returnsLocalStorage);
    input.value = targetForm.email.trim();
    textarea.value = targetForm.message.trim();
} catch (error) {
    console.log();
}

const formDataObject = {
    email: '',
    message: '',
};

form.addEventListener('input', event => {
    if (event.target === input) {
        formDataObject.email = event.target.value.trim();
    } else if (event.target === textarea) {
        formDataObject.message = event.target.value.trim();
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(formDataObject));
});

form.addEventListener('submit', event => {
    event.preventDefault();
    if (input.value && textarea.value) {
        formDataObject.email.trim();
        formDataObject.message.trim();
        const savedForm = localStorage.getItem('feedback-form-state');
        console.log(JSON.parse(savedForm));
        localStorage.removeItem('feedback-form-state');
        input.value = '';
        textarea.value = '';
    } else {
        alert('Please fill in the form field');
    }
});
