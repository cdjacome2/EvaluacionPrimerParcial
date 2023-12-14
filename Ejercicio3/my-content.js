class MyContent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
          <style>
            section {
              padding: 20px;
            }
            .list-group {
              width: 100%;
            }
          </style>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
          <section>
            <br>
            <ul class="list-group">
              <li class="list-group-item">Nombres: Jacome Sanmartin Carol Dayanara</li>
              <li class="list-group-item">NRC: 14386</li>
              <li class="list-group-item">Fecha: 14 de Diciembre de 2023</li>
            </ul>
            <br>
          </section>
        `;
    }
}
customElements.define('my-content', MyContent);
