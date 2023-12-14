class MyContainer extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          div {
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
          }
        </style>
        <div>
          <slot name="header"></slot>
          <slot name="content"></slot>
        </div>
      `;
    }
}
customElements.define('contenedor-component', MyContainer);
