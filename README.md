# Todo App

## Credits

Theme and styling inspired by [this CodePen by saawsan](https://codepen.io/saawsan/pen/jayzeq).

## Run the project

This project should be run using a local web server.

### Option 1 (VS Code)

1. Install the Live Server extension.
2. Right-click `index.html`.
3. Click **Open with Live Server**.

### Option 2 (Python)

```bash
python -m http.server
```

Then open:

```
http://localhost:8000
```

# 📝 Todo List App

A simple and responsive **Todo List** application built with **HTML, CSS, and JavaScript**. It allows users to add, complete, delete, and save tasks using the browser's **Local Storage**. The app also includes a **Dark/Light Mode** toggle with the selected theme remembered across browser sessions.

---

## ✨ Features

- ➕ Add new tasks
- 🗑️ Delete tasks
- ✅ Mark tasks as completed
- 💾 Automatically save tasks using Local Storage
- 🌙 Dark/Light mode toggle
- 🎨 Responsive and modern user interface
- ⚡ No external libraries or frameworks (except Font Awesome for icons)

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Local Storage API
- Font Awesome Icons

---

## 📂 Project Structure

```
Todo-List/
│
├── index.html
├── style.css
├── index.js
└── README.md
```

---

## 🚀 How It Works

### Adding a Task

- Type a task in the input field.
- Click **Add Item**.
- The task is stored in **Local Storage** and displayed immediately.

### Completing a Task

- Click the checkbox.
- The task is marked with a line-through.
- The completion state is saved even after refreshing the page.

### Deleting a Task

- Click the trash icon.
- The task is removed from both the page and Local Storage.

### Theme Toggle

- Click the moon/sun icon.
- Your preferred theme is automatically remembered.

---

## 💾 Local Storage

This project stores data using the browser's Local Storage.

| Key                             | Description                                   |
| ------------------------------- | --------------------------------------------- |
| `items`                         | Stores the todo list as an array              |
| `checkbox-0`, `checkbox-1`, ... | Stores the completion status of each task     |
| `theme`                         | Stores the selected theme (`light` or `dark`) |

---

## 📚 Concepts Practiced

This project helped practice the following JavaScript concepts:

- DOM Manipulation
- Event Listeners
- Form Handling
- Arrays
- Functions
- Loops
- Local Storage
- JSON.parse()
- JSON.stringify()
- Dynamic Element Creation
- Conditional Rendering
- Theme Switching
- CSS Flexbox

---

## ▶️ Running the Project

1. Clone the repository

```bash
git clone https://github.com/your-username/todo-list.git
```

2. Open the project folder.

3. Open `index.html` in your browser.

Or run it using **VS Code Live Server**.

---

## 👨‍💻 Author

**Tamanna Murad**

BCA Student | Learning Java, JavaScript, MERN Stack, and Web Development.

---
