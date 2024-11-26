function addData() {
    const name = document.getElementById('name').value;
    const wakeupTime = document.getElementById('wakeup-time').value;
    const activity = document.getElementById('activity').value;
    const breakfast = document.getElementById('breakfast').value;
    const lunch = document.getElementById('lunch').value;
    const eveningSnacks = document.getElementById('evening-snacks').value;
    const dinner = document.getElementById('dinner').value;
    const akantDhyan = document.getElementById('akant-dhyan').value;
    const samuhikDhyan = document.getElementById('samuhik-dhyan').value;
    const unhealthyFood = document.getElementById('unhealthy-food').value;
    const healthyFood = document.getElementById('healthy-food').value;
    const sleepTime = document.getElementById('sleep-time').value;

    const table = document.getElementById('data-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.innerHTML = `
        <td>${name}</td>
        <td>${wakeupTime}</td>
        <td>${activity}</td>
        <td>${breakfast}</td>
        <td>${lunch}</td>
        <td>${eveningSnacks}</td>
        <td>${dinner}</td>
        <td>${akantDhyan}</td>
        <td>${samuhikDhyan}</td>
        <td>${unhealthyFood}</td>
        <td>${healthyFood}</td>
        <td>${sleepTime}</td>
    `;

    // Reset the form fields
    document.querySelector('form').reset();
}
