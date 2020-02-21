const types = [
    {
        id: 1,
        name: 'type 1'
    }, {
        id: 2,
        name: 'type 2'
    }, {
        id: 3,
        name: 'type 3'
    }, {
        id: 4,
        name: 'type 4'
    }, {
        id: 5,
        name: 'type 5'
    }, {
        id: 6,
        name: 'type 6'
    },
];

const items = [
    {
        id: 1,
        name: "item 1",
        price: 300.01,
        url: "<some url 1>",
        description: "description 1",
        types: [
            types[0],
        ]
    }, {
        id: 2,
        name: "item 2",
        price: 300.01,
        url: "<some url 2>",
        types: [
            types[1],
            types[2],
            types[3],
        ]
    }, {
        id: 3,
        name: "item 3",
        price: 300.01,
        url: "<some url 3>",
        description: "description 3",
        types: [
            types[4],
            types[5],
        ]
    }, {
        id: 4,
        name: "item 4",
        price: 300.01,
        url: "<some url 4>",
        description: "description 4",
        types: [
            types[1],
            types[5],
        ]
    }, {
        id: 5,
        name: "item 5",
        price: 300.01,
        url: "<some url 5>",
        types: [
            types[0],
            types[2],
            types[4],
            types[5],
        ]
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
];

module.exports = { items, types, groups };