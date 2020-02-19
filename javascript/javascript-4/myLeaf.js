class MyLeaf extends HTMLElement {
    constructor(options = {}) {
        super();

        const shadow = this.attachShadow({ mode: 'closed' });

        const style = document.createElement('style');

        style.textContent = `
:host {
    display: block;
}        
`;

        shadow.appendChild(style);

        if (options.id) {
            const text = document.createTextNode(`My leaf: ${options.id}`)
            shadow.appendChild(text);
        }
    }
}

customElements.define('my-leaf', MyLeaf);

export default MyLeaf;