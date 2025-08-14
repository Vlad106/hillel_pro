'use strict';

function TodoModel() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
}

TodoModel.prototype.addTask = function (title, description) {
    const task = {
        id: Date.now(),
        title,
        description
    };
    this.tasks.push(task);
    this._saveToLocalStorage();
    return task;
};

TodoModel.prototype.deleteTask = function (id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this._saveToLocalStorage();
};

TodoModel.prototype.getTasks = function () {
    return this.tasks;
};

TodoModel.prototype._saveToLocalStorage = function () {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
};

