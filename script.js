const modal =
document.querySelector('.modal')

const botaoAbrirModal =
document.querySelector('#botaoprincipal')

const botaofecharmodal = 
document.querySelector('.botao-fechar-modal')

botaoAbrirModal.addEventListener('click', () => {
    modal.showModal();
})     

botaofecharmodal.addEventListener('click', () => {
    modal.close();

})