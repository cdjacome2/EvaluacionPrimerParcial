// Componente de Contenido
class MyContent extends HTMLElement {
    constructor() {
        super();
        // Crear Shadow DOM
        this.attachShadow({ mode: 'open' });
        // Definir la estructura del componente de contenido
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
            <section>
            <br>
                <ul class="list-group">
                    <li class="list-group-item">Lista</li>
                    <li class="list-group-item">Nombres: Jacome Carol, Oviedo Steven</li>
                    <li class="list-group-item">NRC: 14386</li>
                    <li class="list-group-item">Fecha: 28/11/2023</li>
                </ul>
                <br>
            </section>
        `;
    }
    }
    // Registrar el componente de contenido
    customElements.define('my-content', MyContent);