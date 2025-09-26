'use strict';

class TodoApp {
    constructor() {
        this.tasks = [];
        this.filter = "all";

        this.input = document.getElementById("taskInput");
        this.addBtn = document.getElementById("addBtn");
        this.list = document.getElementById("taskList");
        this.counter = document.getElementById("counter");
        this.filterBtns = document.querySelectorAll("[data-filter]");

        this.addBtn.addEventListener("click", () => this.addTask());
        this.filterBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                this.filter = btn.dataset.filter;
                this.render();
            });
        });
    }

    addTask() {
        const text = this.input.value.trim();
        if (!text) return;

        const task = { id: Date.now(), text, completed: false };

        this.tasks.push(task);
        this.renderTask(task);
        this.updateCounter();

        this.input.value = "";
    }

    toggleTask(id) {
        const task = this.tasks.find(t => t.id === id);
        task.completed = !task.completed;

        const li = document.getElementById(id);
        li.classList.toggle("completed");
        this.updateCounter();
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(t => t.id !== id);
        document.getElementById(id).remove();
        this.updateCounter();
    }

    renderTask(task) {
        const li = document.createElement("li");
        li.id = task.id;
        li.textContent = task.text;

        if (task.completed) {
            li.classList.add("completed");
        }

        const doneBtn = document.createElement("button");
        doneBtn.textContent = "Done";
        doneBtn.addEventListener("click", () => this.toggleTask(task.id));

        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.addEventListener("click", () => this.deleteTask(task.id));

        li.appendChild(doneBtn);
        li.appendChild(delBtn);

        this.list.appendChild(li);
    }

    render() {
        this.list.innerHTML = "";
        let filtered = this.tasks;

        if (this.filter === "active") {
            filtered = this.tasks.filter(t => !t.completed);
        } else if (this.filter === "completed") {
            filtered = this.tasks.filter(t => t.completed);
        }

        filtered.forEach(task => this.renderTask(task));
        this.updateCounter();
    }

    updateCounter() {
        const completed = this.tasks.filter(t => t.completed).length;
        const active = this.tasks.length - completed;
        this.counter.textContent = `Active: ${active}, Completed: ${completed}`;
    }
}

const app = new TodoApp();
