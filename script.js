let el = document.createElement("h2");
el.id = "title-name";
el.innerHTML = "События";
document.body.appendChild(el);

//координаты
let coordX = document.createElement("p");
coordX.classList.add("x");
coordX.innerHTML = "X";

let coordY = document.createElement("p");
coordY.classList.add("y");
coordY.innerHTML = "Y";
document.body.append(coordX, coordY);

//mouse coordinates on the page(except our block)
document.querySelector("body").onmousemove = function(event) {
    event = event || body.event;
    console.log(event);
    document.querySelector(".x").innerHTML = event.clientX;
    document.querySelector(".y").innerHTML = event.clientY;
};



//div
let divEl = document.createElement("div");
divEl.classList.add("block");
divEl.style.width = "400px";
divEl.style.height = "400px";
divEl.style.border = "2px solid black";
divEl.style.backgroundColor = "blue";
document.body.appendChild(divEl);

//coordinates x,y under our block

let coordXinto = document.createElement("p");
coordXinto.classList.add("x-intoBlock");
coordXinto.innerHTML = "x:";

let coordYinto = document.createElement("p");
coordYinto.classList.add("y-intoBlock");
coordYinto.innerHTML = "y:";
document.body.append(coordXinto, coordYinto);

//mouse coordinates in our block
document.querySelector(".block").onmousemove = function(event) {
    event = event || block.event;
    console.log(event);
    document.querySelector(".x-intoBlock").innerHTML = event.offsetX;
    document.querySelector(".y-intoBlock").innerHTML = event.offsetY;
};