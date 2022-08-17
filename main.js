'use strict';

const
    modal = document.querySelector('.modal'),
    showModal = document.querySelectorAll('.show-modal'),
    closeModal = document.querySelector('.close-modal'),
    overlay = document.querySelector('.overlay')

showModal.forEach((item) => {
    item.addEventListener('click', () => {
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
    })
})

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})