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

// show modal on any button click
showModalButton.forEach((item) => {
    item.addEventListener('click', showModal)
})

// close modal on close button click
closeModalButton.addEventListener('click', closeModal)

// close modal on overlay click
overlay.addEventListener('click', closeModal)

// close modal on esc button press
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal()
    }
})

