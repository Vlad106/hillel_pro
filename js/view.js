'use strict';

function TodoView() {
    this.todoContainer = document.querySelector('[data-todo-items]');
    this.form = document.getElementById('todoForm');
    this.titleInput = this.form.querySelector('input[name="title"]');
    this.descriptionInput = this.form.querySelector('textarea[name="description"]');
}

TodoView.prototype.renderTask = function (task) {
    const taskCol = document.createElement('div');
    taskCol.classList.add('col-4');

    taskCol.innerHTML = `
        <div class="taskWrapper border p-3 mb-3">
            <div class="taskHeading fw-bold">${task.title}</div>
            <div class="taskDescription mb-2">${task.description}</div>
            <button class="btn btn-danger btn-sm" data-id="${task.id}">Delete</button>
        </div>
    `;

    this.todoContainer.appendChild(taskCol);
};

TodoView.prototype.renderTasks = function (tasks) {
    this.todoContainer.innerHTML = '';
    tasks.forEach(task => this.renderTask(task));
};

TodoView.prototype.clearForm = function () {
    this.titleInput.value = '';
    this.descriptionInput.value = '';
};
