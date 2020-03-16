const bookBtn = document.querySelectorAll('.appointmentBtn');
const appointmentWrapper = document.querySelector('.appointmentWrapper');
const appointmentPopup = document.querySelector('.appointmentPopup');
const appointmentcancel = document.querySelector('.appointmentCancel');
const appointmentForm = document.querySelector('.appointmentWrapper form');
let appointmentRepeat = false;

// open appointmentPopup on click of sign up button
bookBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        appointmentWrapper.classList.remove('d-none');
        if(appointmentRepeat){
            setTimeout(() => {
                appointmentWrapper.classList.add('d-none');
            }, 2000);
        };
    });
})

// stop event bubbling
appointmentPopup.addEventListener('click', e => {
    e.stopPropagation();
});

// close appointmentPopup when click on wrapper only
appointmentWrapper.addEventListener('click', e => {
    e.stopPropagation();
    appointmentWrapper.classList.add('d-none');
});

// close appointmentPopup when clicking on the appointmentcancel option
appointmentcancel.addEventListener('click', () => {
    appointmentWrapper.classList.add('d-none');
});

appointmentForm.addEventListener('submit', e => {
    e.preventDefault;

    // create thank you confirmation screen
    appointmentPopup.innerHTML = 
    `
        <h2 class="text-white">Thanks, ${appointmentForm.name.value}!</h2>
        <p class="text-white">You will receive an email with further details soon.</p>
    `;
    if(screen.width < 1200){
        appointmentPopup.style.paddingTop = '25vh';
    } else{
        appointmentPopup.style.paddingTop = '20vh';
    };
    
    setTimeout(() => {
        appointmentWrapper.classList.add('d-none');
    }, 2000);

    appointmentRepeat = true;
})
