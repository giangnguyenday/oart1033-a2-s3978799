let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
    let x = e.clientX;
    let y = e.clientY;
    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a"));

console.log(links);

links.forEach(link => {
    link.addEventListener("mouseover", () => {
        innerCursor.classList.add("grow");
    })
    link.addEventListener("mouseleave", () => {
        innerCursor.classList.remove("grow");
    })
})


const copyBtn = document.getElementById('copyBtn');
const viewPw = document.getElementById('viewPw');

copyBtn.addEventListener('click', function () {
    viewPw.select();
    document.execCommand('copy');
    copyMessage.classList.add('show-message');
    copyMessage.classList.remove('hide-message');
    setTimeout(function () {
        copyMessage.classList.add('hide-message');
    }, 1000);
});
// Listen for the end of the fading out animation
copyMessage.addEventListener('transitionend', function (event) {
    if (event.propertyName === 'opacity') {
        copyMessage.classList.remove('show-message', 'hide-message');
    }
});

document.querySelector('body').addEventListener('mousemove', (e) => {

    console.log(e);

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const anchor = document.getElementById('eye-socket')
    const rekt = anchor.getBoundingClientRect();
    const anchorX = rekt.left + rekt.width / 2;
    const anchorY = rekt.top + rekt.height / 2;

    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
    console.log(angleDeg)
    const eyes = document.querySelectorAll('.eye-iris')
    eyes.forEach(eye => {
        eye.style.transform = `rotate(${90 + angleDeg}deg)`;
    })
})

function angle(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 / Math.PI;
    return deg;
}

const element = document.querySelectorAll("element");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const currentState = button.getAttribute("data-state");

        if (!currentState || currentState === "closed") {
            button.setAttribute("data-state", "opened");
            button.setAttribute("aria-expanded", "true");
        } else {
            button.setAttribute("data-state", "closed");
            button.setAttribute("aria-expanded", "false");
        }
    });
});

const primaryNav = document.querySelector(".mobile_panel");
const navToggle = document.querySelector(".mobile_menu");
const logo = document.querySelector(".nav-bar");

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");
    const logoVisibility = logo.getAttribute("logo-visible");

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
    }

    if (logoVisibility === "false") {
        logo.setAttribute("logo-visible", true);
    } else if (logoVisibility === "true") {
        logo.setAttribute("logo-visible", false);
    }
});

const copyBtn2 = document.getElementById('money-tablet');
const viewPw2 = document.getElementById('viewPw2');

copyBtn2.addEventListener('click', function () {
    viewPw2.select();
    document.execCommand('copy');
});

var videoPlayer = document.getElementById("videoPlayer");
var myVideo = document.getElementById("myVideo");

    function stopVideo(){
        videoPlayer.style.display = "none"
    }

    function playVideo(file){
        myVideo.src = file;
        videoPlayer.style.display = "block";   
    }