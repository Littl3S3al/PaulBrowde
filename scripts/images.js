
// about page
const aboutImage = document.querySelector('.aboutImage');
const aboutDesktop = "assets/images/PB_couplesSession_Desktop.jpg";
const aboutMobile = "assets/images/PB_couplesSession.jpg";
// therapy page
const therapyImage = document.querySelector('.therapyImage');
const therapyDesktop = "assets/images/PBrowde_intimateCouplesSession_Desktop.jpg";
const therapyMobile = "assets/images/PBrowde_intimateCouplesSession.jpg";

const imageResize = (image, desktopSrc, mobileSrc) => {
    if(screen.width >=1200){
        image.src = desktopSrc;
        image.style.width = '100vw'
    } else if(screen.width < 1200){
        image.src = mobileSrc;
    };
}


