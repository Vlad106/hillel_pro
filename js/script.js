'use strict';

function createBus() {
    const topics = Object.create(null);


    function on(topic, handler) {
        if (!topics[topic]) {
            topics[topic] = new Set();
        }
        topics[topic].add(handler);

        return () => off(topic, handler);
    }

    function off(topic, handler) {
        if (!topics[topic]) return;
        topics[topic].delete(handler);

        if (topics[topic].size === 0) {
            delete topics[topic];
        }
    }

    function emit(topic, payload, delay = 0) {
        if (!topics[topic]) return;

        setTimeout(() => {
            [...topics[topic]].forEach(handler => handler(payload));
        }, delay);
    }

    return { on, off, emit };
}

const bus = createBus();
bus.on('tick', (x) => console.log('tick', x));
bus.emit('tick', { step: 1 }, 0);
console.log('after schedule');