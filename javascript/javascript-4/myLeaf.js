class MyLeaf extends HTMLElement {
    constructor(leaf = {}) {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');

        style.textContent = `
:host {
    display: block;
}        
`;

        shadow.appendChild(style);

        const container = document.createElement('div');
        container.className = 'container';

        shadow.appendChild(container);

        this.leaf = JSON.parse(this.getAttribute('leaf')) || leaf;

        render(this.leaf, container);
    }

    static get observerAttributes() {
        return ['leaf'];
    }

    attributeChangedCallback(_, __, newValue) {
        this.leaf = JSON.parse(newValue);
        render(this.leaf, this.shadowRoot.querySelector('.container'));
    }
}

customElements.define('my-leaf', MyLeaf);
window.MyLeaf = MyLeaf;
export default MyLeaf;


/**
 * 
 * @param {Object} leaf 
 * @param {HTMLDivElement} container 
 */
function render(leaf, container) {

    let html = '';
    if (leaf.items !== undefined && leaf.items.length !== 0) {
        const treeOptions = JSON.stringify(leaf);
        const tree = `<my-tree tree='${treeOptions}'></my-tree>`;
        html += tree;

    } else if (leaf && leaf.id) {
        const text = `My leaf: ${leaf.id}`;
        html += text;
    }
    container.innerHTML = html;
}