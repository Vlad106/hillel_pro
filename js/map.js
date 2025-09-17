'use strict'

function groupByCategory(items) {
    const map = new Map();

    for (const item of items) {
        const key = item.category;
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(item);
    }

    return map;
}


const electronics = { name: 'Electronics' };
const books = { name: 'Books' };
const items = [
    { name: 'Laptop', category: electronics },
    { name: 'Phone',  category: electronics },
    { name: 'Book A', category: books },
];

const grouped = groupByCategory(items);
console.log(Array.from(grouped.entries()));
