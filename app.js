document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task');
    const addBtn = document.getElementById('add-btn');
    const taskList = document.getElementById('task-list');
    const deleteAllBtn = document.getElementById('delete-all');

    addBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', editOrDeleteTask);
    deleteAllBtn.addEventListener('click', deleteAllTasks);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${taskText}</span>
                <span class="actions">
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Delete</button>
                </span>
            `;
            taskList.appendChild(li);
            taskInput.value = '';
        }
    }

    function editOrDeleteTask(event) {
        const target = event.target;
        if (target.classList.contains('delete-btn')) {
            target.parentElement.parentElement.remove();
        } else if (target.classList.contains('edit-btn')) {
            const taskText = target.parentElement.previousElementSibling;
            const updatedTaskText = prompt('Edit the task:', taskText.textContent);
            if (updatedTaskText !== null) {
                taskText.textContent = updatedTaskText;
            }
        }
    }

    function deleteAllTasks() {
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
    }
});