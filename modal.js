// Задание 8 - Создать модальное окно

export class Modal {
  constructor(modalElement) {
    this.modalElement = modalElement;
    this.overlayElement = document.querySelector('.overlay')
    this.closeBtn = this.modalElement.querySelector('.modal-close');
    
    this._bindClose();
    this._bindOverlay();
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
  
  bindOpenButton(openButton) {
    openButton.addEventListener('click', () => {
      this.open();
    });
  }
  
  _bindClose() {
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => {this.close();});
    }
  }
  
  _bindOverlay() {
    if (this.overlayElement) {
      this.overlayElement.addEventListener('click', () => {this.close();});
    }
  }
}