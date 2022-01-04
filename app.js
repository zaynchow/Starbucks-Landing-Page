function changeColor(color) {
    document.querySelector(".circle").style.backgroundColor = color;
}

function changeImage(mouse, image) {
    mouse.preventDefault;
    img = document.querySelector(".changingImg");
    img.src = image;
    let elm = document.querySelector(".imageBox")
    var newone = elm.cloneNode(true);
    elm.parentNode.replaceChild(newone, elm);



}

document.addEventListener("click", (e) => {

    const source = e.target.src.split('/');
    switch (source[4]) {
        case 'img1.png': {
            changeImage(e, './img/img1.png');
            changeColor('#017143');
            break;
        }

        case 'img2.png': {
            changeImage(e, './img/img2.png');
            changeColor('pink');

            break;
        }

        case 'img3.png': {
            changeImage(e, './img/img3.png');
            changeColor('#BD0B8B');
            break;
        }

    }
}
)