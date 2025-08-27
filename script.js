// =============================
// Part 1: JavaScript Basics
// =============================

// Variables, input, and conditionals
document.getElementById("checkAgeBtn").addEventListener("click", () => {
  let age = document.getElementById("userInput").value;
  let result = document.getElementById("ageResult");

  if (age >= 18) {
    result.textContent = "You are an adult ✅";
  } else {
    result.textContent = "You are a minor ❌";
  }
});

// =============================
// Part 2: Functions
// =============================

// Custom function to calculate totals
function calculateTotal(a, b) {
  return a + b;
}

document.getElementById("calcTotalBtn").addEventListener("click", () => {
  let total = calculateTotal(50, 30);
  document.getElementById("totalResult").textContent = "Total: " + total;
});

// Custom function to format strings
function formatString(str) {
  return str.toUpperCase() + " 🎉";
}

document.getElementById("formatBtn").addEventListener("click", () => {
  let formatted = formatString("javascript is fun");
  document.getElementById("formatResult").textContent = formatted;
});

// =============================
// Part 3: Loops
// =============================

// For loop countdown
document.getElementById("countdownBtn").addEventListener("click", () => {
  let list = document.getElementById("countdownList");
  list.innerHTML = "";
  for (let i = 5; i > 0; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
});

// ForEach loop over array
let fruits = ["Apple", "Banana", "Cherry", "Mango"];

document.getElementById("listFruitsBtn").addEventListener("click", () => {
  let list = document.getElementById("fruitsList");
  list.innerHTML = "";
  fruits.forEach(fruit => {
    let li = document.createElement("li");
    li.textContent = fruit;
    list.appendChild(li);
  });
});

// =============================
// Part 4: DOM Manipulation
// =============================

// 1) Change text
document.getElementById("changeTextBtn").addEventListener("click", () => {
  document.getElementById("textToChange").textContent = "The text has been changed! 🚀";
});

// 2) Toggle class
document.getElementById("toggleClassBtn").addEventListener("click", () => {
  document.getElementById("highlightText").classList.toggle("highlight");
});

// 3) Create new elements dynamically
document.getElementById("createElementBtn").addEventListener("click", () => {
  let newItem = document.createElement("li");
  newItem.textContent = "New List Item";
  document.getElementById("dynamicList").appendChild(newItem);
});
