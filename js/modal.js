'use strict';
const modal = () => {

    const modalBtn = document.querySelector('.modal__button');
    const courseBtn = document.querySelector('.course__button');
    const modal = document.querySelector('.modal');

    if (modal && modalBtn && courseBtn) {
        // Если я правильно понял задание, то закрывающую кнопку нужно было добавить через js код, что я и сделал
        const modalInner = modal.querySelector('.modal__inner');

        const modalCloseBtn = document.createElement('div');
        modalCloseBtn.classList.add('modal__close-button');

        const modalCloseButtonImg = document.createElement('img');
        modalCloseButtonImg.src = 'img/close.svg';
        modalCloseButtonImg.alt = 'close icon';

        modalCloseBtn.append(modalCloseButtonImg);
        modalInner.prepend(modalCloseBtn);

        modalBtn.addEventListener('click', () => {
            modal.classList.add('active');
        });

        courseBtn.addEventListener('click', () => {
            modal.classList.add('active');
        });

        modal.addEventListener('click', (e) => {
            if (!e.target.closest('.modal__inner') || e.target.closest('.modal__close-button')) {
                modal.classList.remove('active');
            };
        });
    };
};

modal();