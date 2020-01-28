import { html, render } from 'https://unpkg.com/lit-html?module';

const myLeaf = options => {
    let leafs = (options.items || []).map(myLeaf);

    return html`${options.id}</br>${leafs}`;
}

const myTree = treeObj => myLeaf(treeObj);

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

render(myTree(treeOptions), document.querySelector('#element'));