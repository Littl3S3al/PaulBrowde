const aboutImage = document.querySelector('.aboutImage');

const imageResize = () => {
    if(screen.width >=1200){
        aboutImage.src = "assets/images/PB_couplesSession_Desktop.jpg";
        aboutImage.style.width = '100vw'
    } else if(screen.width < 1200){
        aboutImage.src = "assets/images/PB_couplesSession.jpg";
    };
}

imageResize();

$(window).resize(function() {
    imageResize();
});
