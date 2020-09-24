// console.log(employee);
var dataEmployee = JSON.parse(employee);

console.table(dataEmployee);

function employeeTable(employee) {
  let cols = dataEmployee.keys(employee[0]);

  let headerRow = cols.map((col) => `<th>${col}</th>`).join('');

  let rows = employee
    .map((row) => {
      let tds = cols.map((col) => `<td>${row[col]}</td>`).join('');
      return `<tr>${tds}</tr>`;
    })
    .join('');
  const table = `
	<table>
		<thead>
			<tr>${headerRow}</tr>
		<thead>
		<tbody>
			${rows}
		<tbody>
	<table>`;

  return table;
}
output = document.getElementById('result');
output.innerHTML = employeeTable(dataEmployee);
