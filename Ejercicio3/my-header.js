class MyHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
          <style>
            header {
              background-color: #3498db;
              color: #fff;
              padding: 20px;
              text-align: center;
            }
          </style>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
          <header class="container">
            <h1 class="display-4">Actividad Práctica: Composición de Componentes</h1>
          </header>
        `;
    }
}
customElements.define('my-header', MyHeader);

