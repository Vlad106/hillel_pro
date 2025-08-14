'use strict';

function TodoController(model, view) {
    this.model = model;
    this.view = view;

    this.view.renderTasks(this.model.getTasks());

    this.view.form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.addTask();
    });

    this.view.todoContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON' && e.target.dataset.id) {
            const id = Number(e.target.dataset.id);
            this.deleteTask(id);
        }
    });
}

TodoController.prototype.addTask = function () {
    const title = this.view.titleInput.value.trim();
    const description = this.view.descriptionInput.value.trim();

    if (!title || !description) {
        alert('Please fill in all fields!');
        return;
    }

    this.model.addTask(title, description);
    this.view.renderTasks(this.model.getTasks());
    this.view.clearForm();
};

TodoController.prototype.deleteTask = function (id) {
    this.model.deleteTask(id);
    this.view.renderTasks(this.model.getTasks());
};


