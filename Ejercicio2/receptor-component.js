class ReceptorComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <p id="mensaje-recibido">Mensaje recibido:</p>
    `;

    const mensajeRecibidoElement = this.querySelector('#mensaje-recibido');
    mensajeRecibidoElement.style.fontWeight = 'bold';

    document.addEventListener('mensaje-enviado', (event) => {
      mensajeRecibidoElement.innerText = `Mensaje recibido: ${event.detail.mensaje}`;
    });
  }
}

customElements.define('receptor-component', ReceptorComponent);
