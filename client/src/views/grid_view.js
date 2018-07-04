const PubSub = require('../helpers/pub_sub.js');
const TaskView = require('./task_view.js');
const GridView = function (element) {
this.element = element;
}

GridView.prototype.bindEvents = function () {
  PubSub.subscribe('Tasks:tasks-loaded', (event) => {
    this.render(event.detail);
  });
};

GridView.prototype.render = function (tasks) {
  this.element.innerHTML = "";
  for (const task of tasks) {
    const taskBox = document.createElement('div');
      const taskView = new TaskView(taskBox);
      taskView.render(task);
      this.element.appendChild(taskBox);
  };

};

module.exports = GridView;
