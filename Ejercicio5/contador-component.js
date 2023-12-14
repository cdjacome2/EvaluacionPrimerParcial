class CounterComponent extends HTMLElement {
    constructor() {
        super();
        this._counter = 0;
    }

    connectedCallback() {
        this.render();
        this.attachListeners();
    }

    render() {
        this.innerHTML = `
            <p>Count: ${this._counter}</p>
            <button id="increment">+</button>
            <button id="decrement">-</button>
        `;
    }

    attachListeners() {
        this.addEventListener('click', (event) => {
            if (event.target.id === 'increment') {
                this._counter++;
            } else if (event.target.id === 'decrement' && this._counter > 0) {
                this._counter--;
            }
            this.render();
        });
    }
}

customElements.define('contador-component', CounterComponent);
