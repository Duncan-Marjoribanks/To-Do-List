const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Tasks = function (url) {
this.url = url;
};

Tasks.prototype.bindEvents = function () {
  PubSub.subscribe("InputView:data-submitted", (evt) => {
    this.postTask(evt.detail);
  });

  PubSub.subscribe('TaskView:delete-requested', (evt) => {
    this.deleteTask(evt.detail)
  });
};

Tasks.prototype.getTasks = function () {
  const request = new Request(this.url);
  request.get()
  .then((tasks) => {
    PubSub.publish('Tasks:tasks-loaded', tasks);
  });
};

Tasks.prototype.postTask = function (task) {
  const request = new Request(this.url);
  request.post(task)
  .then((tasks) => {
    PubSub.publish('Tasks:tasks-loaded', tasks);
  });
};

Tasks.prototype.deleteTask = function (id) {
  const request = new Request(this.url);
  request.delete(id)
  .then((tasks) => {
    PubSub.publish('Tasks:tasks-loaded', tasks);
  });
};
module.exports = Tasks;
