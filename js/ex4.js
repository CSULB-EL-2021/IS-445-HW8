/*
 * Ex 4
 */

const form = document.querySelector('#form');
const result = document.querySelector('#result');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    result.innerHTML = ''

    const h3 = document.createElement('h3')
    h3.innerHTML = 'Form Data Entered'
    result.appendChild(h3)

    const table = document.createElement('table');

    const tr = document.createElement('tr');
    const thKey = document.createElement('th');
    const thValue = document.createElement('th');
    thKey.innerHTML = 'Key';
    thValue.innerHTML = 'Value';
    tr.append(thKey);
    tr.append(thValue);
    table.append(tr);

    const data = new FormData(form);
    for (const [key, value] of data) {
        const tr = document.createElement('tr');
        const tdKey = document.createElement('td');
        const tdValue = document.createElement('td');
        tdKey.innerHTML = key;
        tdValue.innerHTML = value;
        tr.append(tdKey);
        tr.append(tdValue);
        table.append(tr);
    }
    result.append(table);
})
