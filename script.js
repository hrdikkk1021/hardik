// Function to add a record to the table
function addRecord() {
    // Get values from the form
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const wakeupTime = document.getElementById("wakeup-time").value;
    const steps = document.getElementById("steps").value;
    const activity = document.getElementById("activity").value;
    const water = document.getElementById("water").value;
    const sleepTime = document.getElementById("sleep-time").value;
    const meals = document.getElementById("meals").value;

    // Validate inputs
    if (!name || !date || !wakeupTime || !steps || !activity || !water || !sleepTime || !meals) {
        alert("Please fill out all fields!");
        return;
    }

    // Add the data to the table
    const tableBody = document.querySelector("#recordsTable tbody");
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${date}</td>
        <td>${wakeupTime}</td>
        <td>${steps}</td>
        <td>${activity}</td>
        <td>${water}</td>
        <td>${sleepTime}</td>
        <td>${meals}</td>
    `;

    // Clear the form
    document.getElementById("healthForm").reset();
}

// Function to export table data to Excel
document.getElementById("exportExcel").addEventListener("click", () => {
    const table = document.getElementById("recordsTable");
    const workbook = XLSX.utils.table_to_book(table, { sheet: "Health Tracker" });
    XLSX.writeFile(workbook, "Health_Tracker.xlsx
