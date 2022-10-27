"use strict";

const imgs = document.querySelectorAll('.imgs-to-show');
const largeImg = document.querySelector('#large-img');
const largeImgContainer = document.querySelector('#large-img-container');

imgs.forEach((img, index) => {
    img.addEventListener('click', () => {
        largeImg.src = imgs[index].src;
        largeImgContainer.style.display = 'grid';
        largeImgContainer.addEventListener('click', () => {
            largeImgContainer.style.display = 'none';
        }
        );
    }
    );
}
);