const totalTable = document.getElementById("total_table");
const tables = document.querySelectorAll(".table");
const availableTable = document.querySelector(".available_table");
const availableAppTable = document.querySelector(".app-available_table");

availableTable.innerText = '24';
availableAppTable.innerText = '24';

tables.forEach(table => {
    table.addEventListener('click', () => {
        const currentColor = table.style.backgroundColor;

        if ( currentColor === 'rgb(171, 171, 171)' || currentColor === ''){
            table.style.backgroundColor = 'tomato';
            availableTable.innerText = parseInt(availableTable.innerText) -2;
            availableAppTable.innerText = parseInt(availableAppTable.innerText) -2;
        } else {
            table.style.backgroundColor = 'rgb(171, 171, 171)'
            availableTable.innerText = parseInt(availableTable.innerText) +2;
            availableAppTable.innerText = parseInt(availableAppTable.innerText) +2;
        }
    });
});

