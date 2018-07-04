const PubSub = require('../helpers/pub_sub.js');

const TaskView = function (element) {
  this.element = element
}

TaskView.prototype.render = function (data) {
  const taskName = document.createElement('p');
  const taskDescription = document.createElement('p');
  const deleteButton = document.createElement('button', id='delete-btn');
  deleteButton.textContent = "delete";
  deleteButton.addEventListener('click', () => {
    PubSub.publish('TaskView:delete-requested', data._id);
  });


  taskName.textContent = data.task;
  taskDescription.textContent = data.description;
  this.element.appendChild(taskName);
  this.element.appendChild(taskDescription);
  this.element.appendChild(deleteButton);
};

module.exports = TaskView;
