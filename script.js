const employees = [
    { name: "Alice Johnson", department: "HR" },
    { name: "Bob Smith", department: "engineering" },
    { name: "Charlie brown", department: "Marketing" },
    { name: "David wilson", department: "engineering"},
    { name: " Eve Adams", department: "HR" }
];

const departmentSelect = document.getElementById("department");
const employeeList = document.getElementById("employee-list");

function displayEmployees(filteredEmployees) {
    employeeList.innerHTML = "";
    filteredEmployees.forEach(emp => {
        const li = document.createElement("li");
        li.textContent = `${emp.name} - ${emp.department}`;
        employeeList.appendChild(li);
    });
}

displayEmployees(employees);

departmentSelect.addEventListener("change", function() {
    const selectedDept = departmentSelect.value;
    const filteredEmployees = selectedDept === "all"
        ? employees
        : employees.filter(emp => emp.department === selectedDept);
    displayEmployees(filteredEmployees);
});