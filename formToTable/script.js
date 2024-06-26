document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const nameCell = newRow.insertCell(0);
    const emailCell = newRow. insertCell(1);
    const ageCell = newRow.insertCell(2);

    nameCell.textContent = name;
    emailCell.textContent = email;
    ageCell.textContent = age;

    document.getElementById('infoForm').reset();
});
