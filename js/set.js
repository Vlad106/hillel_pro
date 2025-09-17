'use strict';

function filterUniqueByReference(arr) {
    return [...new Set(arr)];

    // const seen = new Set();
    // const out = [];
    // for (const el of arr) if (!seen.has(el))
    // { seen.add(el); out.push(el); }
    // return out;
}


const obj1 = { name: 'a' };
const obj2 = { name: 'a' };
const input = [obj1, obj1, obj2, obj2, obj1];

console.log(filterUniqueByReference(input));
