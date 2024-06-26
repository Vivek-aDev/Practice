const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerText = task.text;
        if (task.completed) {
            li.style.textDecoration = 'line-through';
        }
        li.addEventListener('click', () => {
            tasks[index].completed = !tasks[index].completed;
            localStorage.setItem('tasks', JSON.stringify(tasks));
            renderTasks();
        });
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', () => {
            tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            renderTasks();
        });
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value;
    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        taskInput.value = '';
        renderTasks();
    }
});

renderTasks();
