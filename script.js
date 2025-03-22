const popup = document.getElementById('lightbox');
const popupImg = document.getElementById('lightbox-img');
const closer = document.getElementById('close-btn');
const thumbs = document.querySelectorAll('.thumbnail');

thumbs.forEach(img => {
    img.onclick = function () {
        popupImg.src = img.dataset.full;
        popup.classList.add('show');
    };
});

closer.onclick = function () {
    popup.classList.remove('show');
};

popup.addEventListener('click', function (e) {
    if (e.target === popup) popup.classList.remove('show');
});