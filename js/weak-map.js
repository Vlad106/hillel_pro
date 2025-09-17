'use strict';

function createMetadataStorage() {
    const wm = new WeakMap();

    return {
        setMetadata(obj, metadata) {
            if (typeof obj !== 'object' || obj === null) {
                throw new TypeError('Ключом может быть только объект');
            }
            wm.set(obj, metadata);
        },
        getMetadata(obj) {
            return wm.get(obj);
        },
        hasMetadata(obj) {
            return wm.has(obj);
        },
        deleteMetadata(obj) {
            return wm.delete(obj);
        }
    };
}

const storage = createMetadataStorage();
const user1 = { name: 'Анна' };
const user2 = { name: 'Олег' };

storage.setMetadata(user1, { role: 'admin' });
storage.setMetadata(user2, { role: 'user' });

console.log(storage.getMetadata(user1));
console.log(storage.hasMetadata(user2));
storage.deleteMetadata(user2);
console.log(storage.hasMetadata(user2));
