const items = [
    {
        id: 1,
        name: "item 1",
        price: 300.01,
        url: "<some url 1>",
        description: "",
    }, {
        id: 2,
        name: "item 2",
        price: 300.01,
        url: "<some url 2>"
    }, {
        id: 3,
        name: "item 3",
        price: 300.01,
        url: "<some url 3>",
        description: "",
    }, {
        id: 4,
        name: "item 4",
        price: 300.01,
        url: "<some url 4>",
        description: "",
    }, {
        id: 5,
        name: "item 5",
        price: 300.01,
        url: "<some url 5>"
    },
];

const groups = [
    {
        id: 1,
        name: 'group 1',
        items: [
            items[0], items[1], items[4]
        ],
        description: ''
    }, {
        id: 2,
        name: 'group 2',
        items: [
            items[0], items[1],
        ],
        description: ''
    }, {
        id: 3,
        name: 'group 3',
        items: [
            items[3],
        ]
    }, {
        id: 4,
        name: 'group 4',
        items: [
            items[2], items[3], items[4],
        ]
    }, 
]

const db = {
    getItems: () => items,
    getItemById: id => items.filter(item => item.id === id)[0],
    getGroups: () => groups,
    getGroupById: id => groups.filter(group => group.id === id)[0]
}

module.exports = db;