'use strict';

const programContent = document.querySelector('.program__content');

if (programContent) {
    let contents = programContent.querySelectorAll('.program-line__content');

    contents.forEach(content => {
        let title = content.querySelector('.program-line__title');
        let descr = content.querySelector('.program-line__descr');

        title.addEventListener('click', () => {
            contents.forEach(content => {
                let descr = content.querySelector('.program-line__descr');
                if (descr.classList.contains('active')) {
                    descr.classList.remove('active');
                }
            })
            descr.classList.toggle('active');
        })
    })
}