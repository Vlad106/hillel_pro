'use strict';

class Navigation {
    constructor(menuSelector, contentSelector) {
        this.menu = document.querySelector(menuSelector);
        this.links = this.menu.querySelectorAll("a");
        this.content = document.querySelector(contentSelector);

        this.links.forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const url = link.getAttribute("href");
                history.pushState({}, "", url);
                this.setActive(url);
                this.renderContent(url);
            });
        });

        window.addEventListener("popstate", () => {
            this.setActive(window.location.pathname);
            this.renderContent(window.location.pathname);
        });

        this.setActive(window.location.pathname);
        this.renderContent(window.location.pathname);
    }

    setActive(path) {
        this.links.forEach(link => {
            if (link.getAttribute("href") === path) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    renderContent(path) {
        switch (path) {
            case "/home":
                this.content.innerHTML = "<h1>Welcome to Home</h1>";
                break;
            case "/about":
                this.content.innerHTML = "<h1>About Us</h1><p>Some info here</p>";
                break;
            case "/contact":
                this.content.innerHTML = "<h1>Contact</h1><p>Email us at example@test.com</p>";
                break;
            default:
                this.content.innerHTML = "<h1>404 Not Found</h1>";
        }
    }
}

new Navigation("nav", "#content");
