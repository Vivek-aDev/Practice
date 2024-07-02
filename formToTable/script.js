const infoForm = document.getElementById('infoForm');
infoForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const index = document.getElementById('index').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    if (index === '') {
        addRow(name, email, age);
    } else {
        updateRow(index, name, email, age);
    }

    resetForm();
}

function addRow(name, email, age) {
    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).textContent = name;
    newRow.insertCell(1).textContent = email;
    newRow.insertCell(2).textContent = age;
    newRow.insertCell(3).innerHTML = `
        <div class="actions">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
    `;

    const editButton = newRow.querySelector('.edit');
    const deleteButton = newRow.querySelector('.delete');

    editButton.addEventListener('click', () => editRow(newRow));
    deleteButton.addEventListener('click', () => deleteRow(newRow));
}

function updateRow(index, name, email, age) {
    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const row = table.rows[index];

    row.cells[0].textContent = name;
    row.cells[1].textContent = email;
    row.cells[2].textContent = age;
}

function editRow(row) {
    const index = row.rowIndex - 1;
    const name = row.cells[0].textContent;
    const email = row.cells[1].textContent;
    const age = row.cells[2].textContent;

    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
    document.getElementById('age').value = age;
    document.getElementById('index').value = index;
}

function deleteRow(row) {
    const table = row.closest('tbody');
    table.deleteRow(row.rowIndex - 1);
}

function resetForm() {
    infoForm.reset();
    document.getElementById('index').value = '';
}
