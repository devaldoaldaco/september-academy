function abrirModal(id){
    const modal = document.getElementById(id);
    modal.showModal();
    console.log('abrirModal',modal);
}

function abrirModal2(id){
    const modal = document.getElementById(id);
    modal.showModal();
    console.log('abrirModal2', modal);
}

function abrirModal3(id){
    const modal = document.getElementById(id);
    modal.showModal('modal3');
    console.log('abrirModal3', modal);
}

function cerrarModales(id){
    const modal = document.getElementById(id);
    modal.close('modal1');
    modal.close('modal2');
    modal.close('modal3');
    console.log('cerrarModal3', modal);
}



