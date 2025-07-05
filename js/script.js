'use strict';

function findValuesByKey (obj, targetKey) {
    const result = [];
    for (const key in obj) {
    if (key === targetKey) {
        result.push(obj[key]);
    }
    if (typeof obj[key] === 'object' && obj[key] !== null) {
        const nested = findValuesByKey(obj[key], targetKey);
        result.push(...nested);
    }
    }
    return result;
}

const data = {
    id: 1,
    name: "root",
    meta: {
        id: 2,
        parent: {
            id: 3,
            name: ['leaf' , 'dona', 'madonna'],
        },
    },
    array: [
        { id: 4 },
        { name: "node", children: [{ id: 5 }] },
    ],
};

console.log(findValuesByKey(data, "name"));

