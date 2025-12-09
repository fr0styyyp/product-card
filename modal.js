// Задание 8 - Создать модальное окно

const openBtn = document.getElementById('authBtn')
const modal = document.getElementById('authModal')
const overlay = document.querySelector('.overlay')
const closeBtn = document.querySelector('.modal-close')

class Modal {
  constructor(modalElement, overlayElement) {
    this.modalElement = modalElement;
    this.overlayElement = overlayElement;
  }
  open() {
    this.modalElement.classList.add('modal-showed'); 
    this.overlayElement.classList.add('overlay-showed');
  }
  close() {
    this.modalElement.classList.remove('modal-showed');
    this.overlayElement.classList.remove('overlay-showed');
  }
  isOpen() {
    return this.modalElement.classList.contains('modal-showed');
  }
}

const authModal = new Modal(modal, overlay);
openBtn.addEventListener('click', () => {
  authModal.open();
});
closeBtn.addEventListener('click', () => {
  authModal.close();
});