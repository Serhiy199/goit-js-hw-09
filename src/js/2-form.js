const form = document.querySelector('form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const savedTheme = localStorage.getItem('feedback-form-state');

// <--------------------Перший варіант---------------------->

const odject = {
    email: '',
    message: '',
};

// console.log(Boolean(window.localStorage.length));

if (window.localStorage.length >= 1) {
    const targetForm = JSON.parse(savedTheme);
    input.value = targetForm.email;

    textarea.value = targetForm.message;
}

form.addEventListener('input', event => {
    if (event.target === input) {
        odject.email = event.target.value.trim();
    }
    if (event.target === textarea) {
        odject.message = event.target.value.trim();
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(odject));
});

form.addEventListener('submit', event => {
    event.preventDefault();
    if (odject.email && odject.message) {
        const savedThemeFar = localStorage.getItem('feedback-form-state');
        console.log(JSON.parse(savedThemeFar));
        localStorage.removeItem('feedback-form-state');
        form.reset();
    } else {
        alert('Please fill in the form field');
    }
});

// <--------------------Другий варіант---------------------->

// form.addEventListener('input', event => {
//     const formData = new FormData(form);
//     const formObject = {};
//     formData.forEach((value, key) => {
//         formObject[key] = value;
//     });
//     localStorage.setItem('feedback-form-state', JSON.stringify(formObject));
// });

// form.addEventListener('submit', event => {
//     event.preventDefault();
//     console.log(formObject);
//     localStorage.removeItem('feedback-form-state');
//     form.reset();
// });
