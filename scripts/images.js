
const imageResize = (image, desktopSrc, mobileSrc) => {
    if(screen.width >=1200){
        image.src = desktopSrc;
        image.style.width = '100vw'
    } else if(screen.width < 1200){
        image.src = mobileSrc;
    };
}


