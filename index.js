const emptylist = document.querySelector(".emptylist");
const ul = document.querySelector("#lists");
const input = document.querySelector("#newitem");
const button = document.querySelector("#btn");
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
button.addEventListener("click", () => {
  // Get existing items or an empty array
  const items = getItems();

  const value = input.value.trim();
  if (!value) return;

  items.push(value);

  // Save updated array
  saveItems(items);

  displayItems(); // Redisplay it

  input.value = "";
});
function getItems() {
  return JSON.parse(localStorage.getItem("items")) || [];
}

function saveItems(items) {
  localStorage.setItem("items", JSON.stringify(items));
}

function displayItems() {
  ul.innerHTML = "";
  const items = getItems();
  if (items.length === 0) {
    emptylist.textContent = "Your todo list is empty.";
    return;
  }
  emptylist.textContent = "";

  items.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <p class="listItem">${item}</p>
      <div>
        <label class="custom-checkbox">
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>
        <i class="fa-solid fa-trash delete-icon"></i>
      </div>
    `;

    // Get elements inside this li
    const checkbox = li.querySelector("input");
    const para = li.querySelector(".listItem");
    const deleteIcon = li.querySelector(".delete-icon");

    // Restore checkbox state
    checkbox.checked = localStorage.getItem(`checkbox-${index}`) === "true";
    para.style.textDecoration = checkbox.checked
      ? " line-through solid 2px"
      : "none";

    // Checkbox event
    checkbox.addEventListener("change", () => {
      localStorage.setItem(`checkbox-${index}`, checkbox.checked);

      para.style.textDecoration = checkbox.checked
        ? " line-through solid 2px"
        : "none";
    });

    // Delete event
    deleteIcon.addEventListener("click", () => {
      const items = getItems();
      items.splice(index, 1);
      saveItems(items);
      localStorage.removeItem(`checkbox-${index}`);
      displayItems();
    });

    ul.appendChild(li);
  });
}
displayItems();

// dark/light mode theme:
const themeBtn = document.querySelector("#themeBtn");

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
}

// Toggle theme
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themeBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
  } else {
    localStorage.setItem("theme", "light");
    themeBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
  }
});
