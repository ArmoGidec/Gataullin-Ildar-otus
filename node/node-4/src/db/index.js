const models = require('./models');

const getAll = model => () => models[model];

const getById = model => id => models[model].filter(obj => obj.id === id)[0];

const createObjIn = model => objData => {
    const newObj = Object.assign({
        id: (models[model].length || 0) + 1,
    }, objData);

    models[model].push(newObj);
    return newObj;
};

const updateObjIn = model => (id, newObjData) => {
    const obj = getById(model)(id);

    if (obj === undefined) {
        throw new Error(`no object exists in ${model} with id ${id}`);
    }

    const newObj = Object.assign(obj, newObjData);
    return newObj;
};

const deleteObjIn = model => id => {
    const obj = getById(model)(id);

    if (obj === undefined) {
        throw new Error(`no object exists in ${model} with id ${id}`);
    }

    try {
        const index = models[model].findIndex(({id: objId}) => objId === id);
        models[model].splice(index, 1);
    } catch {
        return false;
    }

    return true;
};

const db = {
    getItems: getAll('items'),
    getItemById: getById('items'),
    getGroups: getAll('groups'),
    getGroupById: getById('grops'),
    getTypes: getAll('types'),
    getTypeById: getById('types'),

    createItem: createObjIn('items'),
    updateItem: updateObjIn('items'),
    deleteItem: deleteObjIn('items'),
    createGroup: createObjIn('groups'),
    updateGroup: updateObjIn('groups'),
    deleteGroup: deleteObjIn('groups'),
    createType: createObjIn('types'),
    updateType: updateObjIn('types'),
    deleteType: deleteObjIn('types'),
}

module.exports = db;