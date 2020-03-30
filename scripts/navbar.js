const brand = document.querySelector('.brand');

brand.addEventListener('click', () => {
       if(brand.dataset.loc){
           window.location.assign("../index.html")
       }
       else {
        window.location.assign("index.html")
       };
});

const menuBtn = document.querySelector('.bn');
const menuBtnTablet = document.querySelector('.bnTablet');
const menuwrapper = document.querySelector('.menuWrapper');
const menuContainer = document.querySelector('.menuContainer');
const menuItems = document.querySelector('.menuItems');
const menuList = document.querySelectorAll('.menuList li');
let menuOpen = false;

const openMenu = (btn) => {
    if(screen.width < 1200){
        menuwrapper.style.left = '0';
    } else{
        menuwrapper.style.left = '50vw';
        menuContainer.style.left = '0vw';
    };
    btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 124"><defs><style>.bnBg{fill:#676c76;}.close2{fill:#fff;stroke:#fff;stroke-linecap:round;stroke-miterlimit:10;stroke-width:6px;}</style></defs><title>PB_bn</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2"><circle class="bnBg" cx="62" cy="62" r="62"/><line class="close2" x1="36" y1="38" x2="89" y2="91"/><line class="close2" x1="89" y1="38" x2="36" y2="91"/></g></g></svg>'
    menuOpen = true;
};

const closeMenu = (btn) => {
    if(screen.width < 1200){
        menuwrapper.style.left = '100vw';
        menuContainer.style.left = '100vw';
    } else{
        menuwrapper.style.left = '100vw';
        menuContainer.style.left = '100vw';
    };
    
    btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 124"><defs><style>.bnBg{fill:#676c76;}.bnLines{fill:#fff;stroke:#fff;stroke-linecap:round;stroke-miterlimit:10;stroke-width:6px;}</style></defs><title>PB_bn</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2"><circle class="bnBg" cx="62" cy="62" r="62"/><line class="bnLines" x1="15.5" y1="48.5" x2="108.5" y2="48.5"/><line class="bnLines" x1="15.5" y1="64.76" x2="108.5" y2="64.76"/><line class="bnLines" x1="15.5" y1="82.5" x2="108.5" y2="82.5"/></g></g></svg>'
    menuOpen = false;
};




menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        openMenu(menuBtn);
    } else {
        closeMenu(menuBtn);
    };
});

menuBtnTablet.addEventListener('click', () => {
    if(!menuOpen){
        openMenu(menuBtnTablet);
    } else {
        closeMenu(menuBtnTablet);
    }
});

menuContainer.addEventListener('click', e => {
    closeMenu(menuBtn);
});


menuList.forEach(link => {
    link.addEventListener('click', e => {
        const src = e.target.querySelector('a').getAttribute('href');
        console.log(src);
        if(menuItems.dataset.loc){
            window.location.assign(`../${src}`)
        }
        else {
         window.location.assign(`${src}`)
        };
    })
});



const emailIcon = document.querySelector("body > div.footer.grey.p-5.text-center > div.row.text-center.my-5 > div > div.col-xs-3.p-2.icon.email.d-inline-block");
const locationIcon = document.querySelector("body > div.footer.grey.p-5.text-center > div.row.text-center.my-5 > div > div.col-xs-3.p-2.icon.location.d-inline-block")
const phoneIcon = document.querySelector("body > div.footer.grey.p-5.text-center > div.row.text-center.my-5 > div > div.col-xs-3.p-2.icon.phone.d-inline-block")
const facebookIcon = document.querySelector("body > div.footer.grey.p-5.text-center > div.row.text-center.my-5 > div > div.col-xs-3.p-2.icon.facebook.d-inline-block");

emailIcon.addEventListener('click', () => {
    window.open("mailto:pbrowde@mac.com", '_blank');
});
locationIcon.addEventListener('click', () => {
    window.open("https://www.google.com/maps?ll=40.800375,-73.9719&z=17&t=m&hl=en&gl=ZA&mapclient=embed&q=865+West+End+Ave+New+York,+NY+10025+USA", '_blank');
});
phoneIcon.addEventListener('click', () => {
    window.open('tel:212-678-0221')
});
facebookIcon.addEventListener('click', () => {
    window.open('https://www.facebook.com/Paul-Browde-MD-1265896523584920/?ref=your_pages', '_blank')
})
