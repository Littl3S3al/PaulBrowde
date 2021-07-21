const accordian = document.querySelectorAll('.btn-accordian');


accordian.forEach(accordian => {
    accordian.addEventListener('click', e => {
        e.preventDefault();
        const arrow = accordian.querySelector('svg');
        arrow.classList.toggle('open');
    })
})