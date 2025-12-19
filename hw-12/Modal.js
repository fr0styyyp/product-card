export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.#initCloseBtn();
    this.#initOpen(buttonId);
    this.handleCloseOnOverlay = this.handleCloseOnOverlay.bind(this);
  }

  handleCloseOnOverlay() {
    this.close()
  }

  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');
    
    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', this.handleCloseOnOverlay);
    }
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');
    
    this.overlay.removeEventListener('click', this.handleCloseOnOverlay);
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #initOpen(buttonId) {
    document.getElementById(buttonId).addEventListener('click', () => {
      this.open();
    });
  }

  #initCloseBtn() {
    this.modal.querySelector('.modal-close-button').addEventListener('click', () => {
      this.close();
    });
  }
}