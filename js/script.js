'use strict';

class HistoryTracker {
    constructor() {
        this.historyList = [];

        window.addEventListener("popstate", () => {
            console.log("🔙 Попередній маршрут:", this.historyList);
        });
    }

    push(url) {
        history.pushState({}, "", url);
        this.historyList.push(url);
        console.log("📌 Додано:", url);
    }

    back() {
        history.back();
    }
}


const tracker = new HistoryTracker();

tracker.push("/page1");
tracker.push("/page2");
tracker.back();
