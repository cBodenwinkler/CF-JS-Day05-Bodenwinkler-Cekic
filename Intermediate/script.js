var dataEmployee = JSON.parse(employee);

console.table(dataEmployee);

function employeeTable(employee) {
  // set variable for columns
  let cols = Object.keys(employee[0]);

  // set variable for headerRow <th>
  let headerRow = cols
    .map(cols => `<th> ${cols} </th>`)
    .join("");

  // set variable for rows <td>
  let rows = employee
    .map(row => {
      let tds = cols.map(cols => `<td>${row[cols]}</td>`).join('');
      return `<tr>${tds}</tr>`;
    })
    .join('');


  const table = `
    <table>
      <thead>
        <tr>${headerRow}</tr>
      <thead>
      <tbody>
        <td> ${rows} </td>
      <tbody>
    <table>`;

  return table;
}

output = document.getElementById('result');
output.innerHTML = employeeTable(dataEmployee);

