// User-list-component.js
class UserListComponent extends HTMLElement {
    connectedCallback() {
        this.getDataFromAPI();
    }

    getDataFromAPI() {
        // Consultar la API de JSONPlaceholder
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la solicitud');
                }
                return response.json();
            })
            .then(data => this.displayUserData(data))
            .catch(error => console.error(error));
    }

    displayUserData(data) {
        // Lógica para mostrar los datos de los usuarios en el componente
        const userList = document.createElement('ul');
        userList.classList.add('user-list');

        data.forEach(user => {
            const userItem = document.createElement('li');
            userItem.textContent = `${user.name} (${user.email})`;
            userItem.classList.add('user-list-item');
            userList.appendChild(userItem);
        });

        this.appendChild(userList);
    }
}

customElements.define('user-list-component', UserListComponent);



