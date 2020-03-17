import './myLeaf.js';

class MyTree extends HTMLElement {
    constructor(treeOptions = {}) {
        super();

        const shadow = this.attachShadow({mode: 'open'});

        const style = document.createElement('style');
        style.textContent = `
:host {
    display: block;
}

:host .text {
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
}

:host .items {
    padding-left: 13px;
}

:host .items.collapsed {
    display: none;
}
`;

        shadow.appendChild(style);

        const container = document.createElement('div');
        container.className = 'container';
        shadow.appendChild(container);

        const tree = this.getAttribute('tree');
        this.tree = JSON.parse(tree) || treeOptions;

        render(this.tree, container);
    }

    static get observedAttributes() {
        return ['tree'];
    }

    attributeChangedCallback(_, __, newValue) {
        this.tree = JSON.parse(newValue);
        render(this.tree, this.shadowRoot.querySelector('.container'));
    }
}

window.MyTree = MyTree;
customElements.define('my-tree', MyTree);

/**
 * 
 * @param {Object} tree 
 * @param {HTMLDivElement} container 
 */
function render(tree, container) {
    container.innerHTML = '';
    const text = document.createElement('div');
    text.classList.add('text');
    container.appendChild(text);

    text.innerText = `My tree: ${tree.id}`;

    if (tree.items) {
        const itemsContainer = document.createElement('div');
        itemsContainer.className = 'items';
        
        let html = '';
        
        for (let item of tree.items) {
            const itemOptions = JSON.stringify(item);
            const leaf = `<my-leaf leaf='${itemOptions}'></my-leaf>`;
            html += leaf;
        }

        itemsContainer.innerHTML = html;
        container.appendChild(itemsContainer);

        text.addEventListener('click', () => {
            itemsContainer.classList.toggle('collapsed');
        });
    }
}