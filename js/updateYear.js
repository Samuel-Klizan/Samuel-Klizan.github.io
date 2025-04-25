const birthYear = 2005;

const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;

document.getElementById("year").textContent = new Date().getFullYear();
document.querySelectorAll(".age").forEach(element => {element.textContent = age;});