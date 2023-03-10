let radius_el = document.getElementById("radius");
let area_el = document.getElementById("area");
let perimeter_el = document.getElementById("perimeter");

const radius = prompt("Enter Radius of the circle : ");

const area = 3.14 * radius * radius;
const perimeter = 2 * 3.14 * radius;

radius_el.innerText = "Radius = " + radius;
perimeter_el.innerText = "Perimeter = " + perimeter;
area_el.innerText = "Area = " + area;

console.log("Perimeter is = ", perimeter);
console.log("Area is = ", area);