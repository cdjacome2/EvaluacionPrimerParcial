class Saludo extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Crear el HTML para el saludo con estilos
        this.shadowRoot.innerHTML = `
            <style>
                .saludo {
                    text-align: center;
                    background-color: #6e6f70;
                    color: #fff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                }

                h1 {
                    margin: 0;
                    font-size: 2em;
                }
            </style>
            <div class="saludo">
                <h1>¡Hola, Mundo!</h1>
            </div>
        `;
    }
}

customElements.define('saludo-component', Saludo);



