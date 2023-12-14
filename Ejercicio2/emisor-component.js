class EmisorComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <button id="emisor-btn">Enviar Mensaje</button>
    `;

    const emisorBtn = this.querySelector('#emisor-btn');
    emisorBtn.style.backgroundColor = '#3498db';
    emisorBtn.style.color = '#fff';
    emisorBtn.style.padding = '10px 20px';
    emisorBtn.style.border = 'none';
    emisorBtn.style.borderRadius = '5px';
    emisorBtn.style.cursor = 'pointer';

    emisorBtn.addEventListener('click', () => {
      const mensajeEvent = new CustomEvent('mensaje-enviado', {
        bubbles: true,
        detail: { mensaje: 'Hola desde emisor-component' }
      });
      document.dispatchEvent(mensajeEvent);
    });
  }
}

customElements.define('emisor-component', EmisorComponent);
