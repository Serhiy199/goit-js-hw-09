const form = document.querySelector('form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const savedTheme = localStorage.getItem('feedback-form-state');

// <--------------------Перший варіант---------------------->

const odject = {
    email: '',
    message: '',
};

if (savedTheme) {
    const targetForm = JSON.parse(savedTheme);
    // console.log(odject.email);
    // console.log(typeof(targetForm.email));
    let valueEmail = odject.email;
    console.log(valueEmail);
    valueEmail = 'dcscvsdc';
    console.log(valueEmail);
    valueEmail = targetForm.email;
    console.log(valueEmail);
    input.value = valueEmail;

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
