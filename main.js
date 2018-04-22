var nav_bar = document.getElementById('nav_bar');
var nav_menu = document.getElementById('nav_menu');
var sliders = document.getElementsByClassName('slider');
var footer = document.getElementById('footer');
var window_height;
var document_height;
var scrollbar_width;
    
function expand_nav() {
    nav_bar.classList.toggle('open');
    nav_menu.classList.toggle('open');
}

function getScrollBarWidth() {
    let inner = document.createElement('p');
    inner.style.width = "100%";
    inner.style.height = "200px";

    let outer = document.createElement('div');
    outer.style.position = "absolute";
    outer.style.top = "0px";
    outer.style.left = "0px";
    outer.style.visibility = "hidden";
    outer.style.width = "200px";
    outer.style.height = "150px";
    outer.style.overflow = "hidden";
    outer.appendChild(inner);

    document.body.appendChild(outer);
    let w1 = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    let w2 = inner.offsetWidth;
    if (w1 == w2) w2 = outer.clientWidth;

    document.body.removeChild(outer);

    return (w1 - w2);
};

function main(){
    window_height = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    document_height = document.body.clientHeight;
    scrollbar_width = getScrollBarWidth();

    if(window_height > document_height) {
        footer.style.position = 'absolute';
        footer.style.bottom = '0';
    } else {
        footer.style.position = 'static';
        footer.style.bottom = 'unset';
    }

    for(let i = 0; i < sliders.length; i++) {
        sliders[i].style.height = sliders[i].clientHeight + scrollbar_width + 'px';
        for(let j = 0; i < sliders[i].children.length; j++) {
            sliders[i].children[j].style.height = sliders[i].children[j].clientHeight - scrollbar_width + 'px';
        }
    }
}

window.addEventListener('resize', main);

main();