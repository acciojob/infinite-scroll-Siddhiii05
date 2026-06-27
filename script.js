const list = document.getElementById("infi-list");
let count = 1;

// Add items
function addItems(n) {
    for (let i = 0; i < n; i++) {
        const li = document.createElement("li");
        li.textContent = "Item " + count++;
        list.appendChild(li);
    }
}

// Add 10 items initially
addItems(10);

// Infinite scrolling inside the list
list.addEventListener("scroll", function () {
    if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
        addItems(2);
    }
});