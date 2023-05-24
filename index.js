let body = document.getElementById("body").style.backgroundColor = "silver";

let title = document.getElementById("title").style.color = "green";
// Change the font case for h3 title tags to uppercase

document.getElementById("fruList").style.transform = "uppercase";

// Add one more fruit to the fruits list
let frlist = document.createElement('li')
frlist.innerHTML = "Strawberry";
document.getElementById('fruList').appendChild(frlist)
// Add one more vegetable to the vegetables

let  list = document.createElement('li')
list.innerHTML = "Cabbage";
document.getElementById('vegList').appendChild(list)

