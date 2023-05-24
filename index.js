let body = document.getElementById("body").style.backgroundColor = "silver";

let title = document.getElementById("title").style.color = "green";
// Change the font case for h3 title tags to uppercase



// Add one more fruit to the fruits list
let fruList = document.getElementById("fruList");
    let newFruit = document.createElement("li");
    newFruit.textContent = "Apple";
    fruList.appendChild(newFruit);
// Add one more vegetable to the vegetables
let vegList = document.getElementById("vegList");
    let newVeg = document.createElement("li");
    newVeg.textContent = "Cabbage";
    vegList.appendChild(newVeg);