const buttonNext1 = document.getElementById('next-1');
const buttonNext2 = document.getElementById('next-2');
const buttonNext3 = document.getElementById('next-3');
const buttonPrevious1 = document.getElementById('previous-1');
const buttonPrevious2 = document.getElementById('previous-2');
const buttonsExit = document.querySelectorAll('.exit');
const meter = document.querySelector('meter');



buttonNext1.addEventListener('click', () => {
    meter.value = 7;
    closeModal('modal-1');
    openModal('modal-2');
});


buttonNext2.addEventListener('click', () => {
    meter.value = 15;
    closeModal('modal-2');
    openModal('modal-3');
});


buttonNext3.addEventListener('click', () => {
    meter.value = 23;
    closeModal('modal-3');
});

buttonPrevious1.addEventListener('click', () => {
    meter.value = 0;
    closeModal('modal-2');
    openModal('modal-1');
});
buttonPrevious2.addEventListener('click', () => {
    meter.value = 7;
    closeModal('modal-3');
    openModal('modal-2');

});

buttonsExit.forEach(button => {
    button.addEventListener('click', () => {
        window.location.reload()
    })
});


function openModal(modal_id = 'modal-1') {
    const modal = document.getElementById(modal_id);
    modal.showModal();
    return
}

function closeModal(modal_id) {
    const modal = document.getElementById(modal_id)
    modal.close();
    return
}
