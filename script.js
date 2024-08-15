document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const listItem = document.createElement('li');
        listItem.className = 'flex items-center justify-between mb-2 p-2 border rounded';

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        listItem.appendChild(taskSpan);

        const buttonsDiv = document.createElement('div');
        
        const completeBtn = document.createElement('button');
        completeBtn.className = 'bg-green-500 text-white p-1 rounded mr-2';
        completeBtn.textContent = 'Complete';
        completeBtn.addEventListener('click', function () {
            taskSpan.classList.toggle('line-through');
        });
        buttonsDiv.appendChild(completeBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'bg-red-500 text-white p-1 rounded';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function () {
            taskList.removeChild(listItem);
        });
        buttonsDiv.appendChild(deleteBtn);

        listItem.appendChild(buttonsDiv);
        taskList.appendChild(listItem);

        taskInput.value = '';
    }

    addTaskBtn.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
