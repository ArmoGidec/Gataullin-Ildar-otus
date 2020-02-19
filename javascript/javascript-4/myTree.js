import MyLeaf from './myLeaf.js';

function render(tree, shadowRoot) {
    const container = document.createElement('div');
    container.classList.add('container');
    for (let item of tree.items) {
        let child = item.items === undefined ? (new MyLeaf(item)) : (new MyTree(item));
        container.appendChild(child);
    }
    shadowRoot.appendChild(container);
}

class MyTree extends HTMLElement {
    constructor(treeOptions = {}) {
        super();

        const shadow = this.attachShadow({mode: 'open'});

        const style = document.createElement('style');
        style.textContent = `
:host {
    display: block;
}

:host text {
    cursor: pointer;
}

:host .container {
    padding-left: 13px;
}
`;

        shadow.appendChild(style);

        const text = document.createElement('div');
        text.classList.add('text');
        shadow.appendChild(text);

        try {
            this.tree = JSON.parse(this.getAttribute('tree'));
        } catch {
            this.tree = treeOptions;
        }

        render(this.tree, this.shadowRoot);
    }

    static get observerAttributes() {
        return ['tree'];
    }

    attributeChangedCallback(_, __, newValue) {
        this.tree = newValue;
    }
}

customElements.define('my-tree', MyTree);
window.MyTree = MyTree;