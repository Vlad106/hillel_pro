'use strict';

class ObjectTracker {
    constructor() {
        this._seen = new WeakSet();
    }

    mark(obj) {
        if (typeof obj !== 'object' || obj === null) {
            throw new TypeError('Можно помечать только объекты');
        }
        this._seen.add(obj);
    }

    wasProcessed(obj) {
        if (typeof obj !== 'object' || obj === null) return false;
        return this._seen.has(obj);
    }
}

const tracker = new ObjectTracker();
const node = { name: 'A' };

console.log(tracker.wasProcessed(node));
tracker.mark(node);
console.log(tracker.wasProcessed(node));
