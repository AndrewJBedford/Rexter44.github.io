const dateTimeObject = new Date();
const fullYear = dateTimeObject.getFullYear();
const currentYear = document.getElementById("currentYear");
currentYear.textContent = fullYear;

document.getElementById("lastUpdated").textContent = document.lastmodified;