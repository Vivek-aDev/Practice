document.getElementById('infoForm').addEventListener('submit', function(event) {
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

    document.getElementById('infoForm').reset();
    document.getElementById('index').value = '';
});

function addRow(name, email, age) {
    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const nameCell = newRow.insertCell(0);
    const emailCell = newRow.insertCell(1);
    const ageCell = newRow.insertCell(2);
    const actionsCell = newRow.insertCell(3);

    nameCell.textContent = name;
    emailCell.textContent = email;
    ageCell.textContent = age;
    actionsCell.innerHTML = `
        <div class="actions">
            <button class="edit" onclick="editRow(this)">Edit</button>
            <button class="delete" onclick="deleteRow(this)">Delete</button>
        </div>
    `;
}

function updateRow(index, name, email, age) {
    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const row = table.rows[index];

    row.cells[0].textContent = name;
    row.cells[1].textContent = email;
    row.cells[2].textContent = age;
}

function editRow(button) {
    const row = button.closest('tr');
    const index = row.rowIndex - 1;

    const name = row.cells[0].textContent;
    const email = row.cells[1].textContent;
    const age = row.cells[2].textContent;

    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
    document.getElementById('age').value = age;
    document.getElementById('index').value = index;
}

function deleteRow(button) {
    const row = button.closest('tr');
    const table = row.closest('tbody');
    table.deleteRow(row.rowIndex - 1);
}
