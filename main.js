'use strict';

const
    modal = document.querySelector('.modal'),
    showModalButton = document.querySelectorAll('.show-modal'),
    closeModalButton = document.querySelector('.close-modal'),
    overlay = document.querySelector('.overlay'),
    closeModal = () => {
        modal.classList.add('hidden')
        overlay.classList.add('hidden')
    },
    showModal = () => {
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
    }

showModalButton.forEach((item) => {
    item.addEventListener('click', showModal)
})

closeModalButton.addEventListener('click', closeModal)

overlay.addEventListener('click', closeModal)