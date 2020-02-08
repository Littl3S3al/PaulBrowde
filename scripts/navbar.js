const brand = document.querySelector('.logoBg');

brand.addEventListener('click', () => {
    document.location.href = 'index.html';
})

const menuBtn = document.querySelector('.bn');
const menuwrapper = document.querySelector('.menuWrapper');
let menuOpen = false;


menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuwrapper.style.left = '0';
        menuBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 124"><defs><style>.bnBg{fill:#676c76;}.close2{fill:#fff;stroke:#fff;stroke-linecap:round;stroke-miterlimit:10;stroke-width:6px;}</style></defs><title>PB_bn</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2"><circle class="bnBg" cx="62" cy="62" r="62"/><line class="close2" x1="36" y1="38" x2="89" y2="91"/><line class="close2" x1="89" y1="38" x2="36" y2="91"/></g></g></svg>'
        menuOpen = true;
    } else {
        menuwrapper.style.left = '100vw';
        menuBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 124"><defs><style>.bnBg{fill:#676c76;}.bnLines{fill:#fff;stroke:#fff;stroke-linecap:round;stroke-miterlimit:10;stroke-width:6px;}</style></defs><title>PB_bn</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2"><circle class="bnBg" cx="62" cy="62" r="62"/><line class="bnLines" x1="15.5" y1="48.5" x2="108.5" y2="48.5"/><line class="bnLines" x1="15.5" y1="64.76" x2="108.5" y2="64.76"/><line class="bnLines" x1="15.5" y1="82.5" x2="108.5" y2="82.5"/></g></g></svg>'
        menuOpen = false;
    }
})