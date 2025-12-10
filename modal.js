// Задание 8 - Создать модальное окно

export class Modal {
  constructor(modalElement) {
    this.modalElement = modalElement;
    this.overlayElement = document.querySelector('.overlay')
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