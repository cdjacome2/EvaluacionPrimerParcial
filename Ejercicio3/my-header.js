// Componente de Encabezado
class MyHeader extends HTMLElement {
    constructor() {
        super();
        // Crear Shadow DOM
        this.attachShadow({ mode: 'open' });
        // Definir la estructura del componente de encabezado con Bootstrap
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
            <header class="container">
                <h1 class="display-4">Actividad Práctica: Composicion Componentes</h1>
            </header>
        `;
    }
    }
    // Registrar el componente de encabezado
    customElements.define('my-header', MyHeader);
