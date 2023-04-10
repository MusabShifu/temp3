let nav = document.getElementById('nav');
let navb = document.getElementById('navb');
let toggle = document.getElementById('toggle');
let html = document.getElementsByTagName('html');
let brands = document.getElementsByClassName('brand');
let portfolioBox = document.getElementsByClassName('box-p');
let portfolioButtons = document.getElementsByClassName('b-p');
let tx = document.getElementsByClassName('tx');
let aboutInfo = document.getElementsByClassName('info-b');
let aboutButton = document.getElementsByClassName('b-b');
let about = document.getElementsByClassName('about');

let t = 0;
toggle.onclick = () => {
    switch (t) {
        case 0:
            nav.classList = ['nav-on'];
            nav.style.display = 'block';
            if (html[0].clientWidth > 1100) {
                toggle.style.marginRight = '180px';
                nav.style.width = '250px'
            } else {
                toggle.style.marginRight = '200px';
                nav.style.paddingLeft = '10px';
                nav.style.width = '170px'
            }
            t = 1
            break;
        case 1:
            nav.classList = [''];
            nav.style.display = 'none'
            t = 0;
            toggle.style.marginRight = '0'
            break;
    }
}
navb.onclick = toggle.onclick

for (let i = 0; i < brands.length; i++) {



    brands[i].onclick = () => {
        brands[i].classList = ['brand active'];
        portfolioBox[i].classList = ['box active box-p']
        portfolioBox[i].style.display = 'flex';
        for (let j = 0; j < brands.length; j++) {
            if (!(i == j)) {
                brands[j].classList = ['brand'];
                portfolioBox[j].classList = ['box  box-p'];
                portfolioBox[j].style.display = 'none';

            }
        }
    }
}


for (let i = 0; i < portfolioButtons.length; i++) {
    portfolioButtons[i].onclick = () => {
        portfolioBox[i].style.display = 'none';
        brands[i].classList = ['brand']
    }
}

for (let i = 0; i < tx.length; i++) {
    tx[i].onclick = () => {
        about[0].classList = ['about about-x section'];
        tx[i].classList = ['tx active'];
        aboutInfo[i].style.display = 'block';
        aboutInfo[i].classList = ['info info-b active'];
        for (let j = 0; j < tx.length; j++) {
           if (!(i===j)) {
               tx[j].classList = ['tx'];
               aboutInfo[j].style.display = 'none';
               aboutInfo[j].classList = ['info info-b active'];

           }
            
        }
    }
    
    }

for (let i = 0; i < aboutButton.length; i++) {
    aboutButton[i].onclick = () => {
        aboutInfo[i].style.display = 'none';
        tx[i].classList = ['tx']
        about[0].classList = ['about about-y section'];
    }
    
}