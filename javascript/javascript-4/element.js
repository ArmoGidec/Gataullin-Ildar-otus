class BlockElement extends HTMLElement {
    constructor() {
        super();
        this.style.display = 'block';
    }
}

class MyTree extends BlockElement {
    constructor(treeObj) {
        super();

        let leaf = new MyLeaf(treeObj);

        this.innerHTML = 'My Tree:';
        this.appendChild(leaf);
    }
}

customElements.define('my-tree', MyTree);

class MyLeaf extends BlockElement {
    constructor(options) {
        super();

        this.innerHTML = `My Leaf: ${options.id}`;
        this.style.paddingLeft = '13px';
        if (options.items) {
            for (let item of options.items) {
                this.appendChild(new MyLeaf(item));
            }
        }
    }
}

customElements.define('my-leaf', MyLeaf);

const treeOptions = {
    id: 1,
    items: [
        {
            id: 2,
            items: [
                {
                    id: 3
                }, {
                    id: 4
                }
            ],
        }, {
            id: 5
        }
    ]
}

let myTree = new MyTree(treeOptions);

document.querySelector('#app').appendChild(myTree);