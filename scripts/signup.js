const signupBtn = document.querySelector('.signup');
const popupWrapper = document.querySelector('.popupWrapper');
const popup = document.querySelector('.popup');
const cancel = document.querySelector('.signupCancel');
const form = document.querySelector('.popupWrapper form');
let repeat = false;

// open popup on click of sign up button
signupBtn.addEventListener('click', () => {
    popupWrapper.classList.remove('d-none');
    if(repeat){
        setTimeout(() => {
            popupWrapper.classList.add('d-none');
        }, 2000);
    };
})

// close popup when clicking on the cancel option
cancel.addEventListener('click', () => {
    popupWrapper.classList.add('d-none');
})

// actions for when the user submits
form.addEventListener('submit', e => {
    e.preventDefault;

    // create thank you confirmation screen
    popup.innerHTML = 
    `
        <h2 class="text-white">Thanks, ${form.name.value}!</h2>
        <p class="text-white">You will receive an email confirming your subscription shortly.</p>
    `;
    popup.style.paddingTop = '25vh';
    setTimeout(() => {
        popupWrapper.classList.add('d-none');
    }, 2000);

    repeat = true;

    // submit result to the database
    const now = new Date();
    const subscriber = {
        name: form.name.value,
        email: form.email.value,
        date: firebase.firestore.Timestamp.fromDate(now)
    };
    db.collection('mailingList').add(subscriber).then(() => {
        console.log('subscriber added');
    }).catch(err => {
        console.log(err);
    })
})

