

function openNav() {
    document.getElementById("myNav").style.width = "25%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
function openCarte() {
    document.getElementById("carte").style.width = "25%";
}

const span = document.querySelector('span');

const nav = document.querySelector('nav');

span.addEventListener('click', () => {
    
    nav.classList.add('carte');

});