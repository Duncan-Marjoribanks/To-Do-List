const GridView = require('./views/grid_view.js');
const InputView = require('./views/input_view.js');
const Tasks = require('./models/tasks.js');
document.addEventListener('DOMContentLoaded', () => {
console.log('content loaded');


const element = document.querySelector('#hook');
const gridView = new GridView(element)
gridView.bindEvents();

const inputForm = document.querySelector('#tasks-input-form');
const inputView = new InputView(inputForm);
inputView.bindEvents();

const tasks = new Tasks('http://localhost:3000/api/tasks');
tasks.bindEvents();
tasks.getTasks();






});
