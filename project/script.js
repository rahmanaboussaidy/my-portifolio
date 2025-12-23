// Task storage (browser-safe)
let tasks = [];


// Initialize app
function init() {
    loadTasks();
    renderTasks();
    setupEventListeners();
}

// Load tasks from localStorage
function loadTasks() {
    const storedTasks = localStorage.getItem('tasks');

    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    } else {
        tasks = [];
    }
}

// Save all tasks to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


// Setup event listeners
function setupEventListeners() {
    const form = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');

    form.addEventListener('submit', handleAddTask);

    // Event delegation for task buttons
    taskList.addEventListener('click', handleTaskActions);
}


// Add new task
function handleAddTask(e) {
    e.preventDefault();

    const nameInput = document.getElementById('task-name');
    const descInput = document.getElementById('task-desc');

    const name = nameInput.value.trim();
    const description = descInput.value.trim();

    if (name === '') return;

    const task = {
        id: Date.now(),
        name,
        description,
        completed: false
    };

    tasks.unshift(task);
    saveTasks();

    nameInput.value = '';
    descInput.value = '';

    renderTasks();
}


// Handle task actions (complete/delete)
function handleTaskActions(e) {
    const taskId = Number(e.target.dataset.id);

    if (e.target.classList.contains('complete-btn')) {
        toggleComplete(taskId);
    }

    if (e.target.classList.contains('delete-btn')) {
        deleteTask(taskId);
    }
}


// Toggle completion
function toggleComplete(taskId) {
    const task = tasks.find(t => t.id === taskId);

    if (!task) return;

    task.completed = !task.completed;
    saveTasks();
    renderTasks();
}


// Delete task
function deleteTask(taskId) {
    tasks = tasks.filter(t => t.id !== taskId);
    saveTasks();
    renderTasks();
}


// Render tasks
function renderTasks() {
    const taskList = document.getElementById('task-list');

    if (tasks.length === 0) {
        taskList.innerHTML =
            '<div class="empty-message">No tasks yet. Add one to get started!</div>';
        return;
    }

    taskList.innerHTML = tasks
        .map(
            task => `
        <div class="task-item ${task.completed ? 'completed' : ''}">
            <h3>${escapeHtml(task.name)}</h3>
            ${task.description ? `<p>${escapeHtml(task.description)}</p>` : ''}
            <div class="task-actions">
                <button class="complete-btn" data-id="${task.id}">
                    ${task.completed ? 'Undo' : 'Complete'}
                </button>
                <button class="delete-btn" data-id="${task.id}">
                    Delete
                </button>
            </div>
        </div>
    `
        )
        .join('');
}


// Escape HTML (XSS protection)
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}


// Start app
init();
