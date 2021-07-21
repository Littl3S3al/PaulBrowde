const signupBtn = document.querySelector('.signup');
const popupWrapper = document.querySelector('.popupWrapper');
const popup = document.querySelector('.popup');
const cancel = document.querySelector('.signupCancel');
const form = document.querySelector('.popupWrapper form');
const submitted = document.querySelector('.response');

// open popup on click of sign up button
signupBtn.addEventListener('click', () => {
    popupWrapper.classList.remove('d-none');
});

// stop event bubbling
popup.addEventListener('click', e => {
    e.stopPropagation();
});

// close popup when click on wrapper only
popupWrapper.addEventListener('click', e => {
    e.stopPropagation();
    popupWrapper.classList.add('d-none');
});

// close popup when clicking on the cancel option
cancel.addEventListener('click', () => {
    popupWrapper.classList.add('d-none');
})

// actions for when the user submits
form.addEventListener('submit', () => {
    submitted.classList.remove('d-none');
    popupWrapper.classList.add('d-none');
    console.log('message')
})

