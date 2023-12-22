const form = document.querySelector('form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');

try {
    const returnsLocalStorage = JSON.parse(
        localStorage.getItem('feedback-form-state')
    );
    Array.from(form.elements).forEach(element => {
        const storageValue = returnsLocalStorage[element.name];
        if (storageValue) {
            element.value = storageValue;
        }
    });
} catch (error) {
    console.log('Parse form storage error');
}

form.addEventListener('input', event => {
    const formData = new FormData(form);
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value.trim();
        // console.log(typeof value);
    });
    localStorage.setItem('feedback-form-state', JSON.stringify(formDataObject));
});

form.addEventListener('submit', event => {
    event.preventDefault();
    if (email.value && message.value) {
        const savedForm = localStorage.getItem('feedback-form-state');
        console.log(JSON.parse(savedForm));
        localStorage.removeItem('feedback-form-state');
        form.reset();
    } else {
        alert('Please fill in the form field');
    }
});
