function createPromise(index) {
  const delay = Math.random() * 2 + 1; 
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ name: Promise ${index}, time: delay });
    }, delay * 1000);
  });
}

const output = document.getElementById("output");

const promises = [createPromise(1), createPromise(2), createPromise(3)];


output.innerHTML = '<tr><td>Loading...</td><td></td></tr>';

Promise.all(promises).then(results => {
  output.innerHTML = '';

  results.forEach(result => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${result.name}</td><td>${result.time.toFixed(3)}</td>`;
    output.appendChild(row);
  });

  const total = Math.max(...results.map(r => r.time));
  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `<td>Total</td><td>${total.toFixed(3)}</td>`;
  output.appendChild(totalRow);
});