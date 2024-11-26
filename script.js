function addData() {
    // Get the input values from the form
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

    // Get the table body element
    const table = document.getElementById('data-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Insert data into the new row
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

    // Create a data array for Excel export
    const data = [];
    const rows = document.querySelectorAll('#data-table tbody tr');
    rows.forEach(row => {
        const rowData = [];
        row.querySelectorAll('td').forEach(cell => {
            rowData.push(cell.textContent);
        });
        data.push(rowData);
    });

    // Add headers to the data array
    const headers = ['Name', 'Wakeup Time', 'Physical Activity', 'Breakfast', 'Lunch', 'Evening Snacks', 'Dinner', 'Akant Dhyan', 'Samuhik Dhyan', 'Unhealthy Food', 'Healthy Food', 'Sleep Time'];
    data.unshift(headers); // Unshift to add headers at the start of the data array

    // Generate the Excel file using SheetJS
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Health Data');

    // Trigger download of the Excel file
    XLSX.writeFile(wb, 'Health_Tracking_Data.xlsx');

    // Reset the form fields
    document.getElementById('name').value = '';
    document.getElementById('wakeup-time').value = '';
    document.getElementById('activity').value = '';
    document.getElementById('breakfast').value = '';
    document.getElementById('lunch').value = '';
    document.getElementById('evening-snacks').value = '';
    document.getElementById('dinner').value = '';
    document.getElementById('akant-dhyan').value = 'Yes'; // or 'No' based on your requirement
    document.getElementById('samuhik-dhyan').value = 'Yes'; // or 'No' based on your requirement
    document.getElementById('unhealthy-food').value = '';
    document.getElementById('healthy-food').value = '';
    document.getElementById('sleep-time').value = '';
}
