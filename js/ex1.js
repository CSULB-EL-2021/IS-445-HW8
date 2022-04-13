/*
 * Ex 1
 */

const table = document.querySelector('#paintings')

fetch('https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json')
    .then((res) => res.json())
    .then((data) => {
        const fields = ['name', 'year', 'artist']

        data.forEach((item) => {
            const tr = document.createElement('tr');
            fields.forEach((field) => {
                const td = document.createElement('td')
                td.textContent = item[field]
                tr.appendChild(td)
            })
            table.appendChild(tr)
        })
    })
    .catch((err) => console.log(err))