const PubSub = require('../helpers/pub_sub.js');

const InputView = function (element) {
  this.element = element;
};

InputView.prototype.bindEvents = function () {
  this.element.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const task = {
      task: evt.target.task.value,
      description: evt.target.description.value
    }
    PubSub.publish("InputView:data-submitted", task);
  });
};



module.exports = InputView;
