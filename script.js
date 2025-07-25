//your JS code here. If required.
function createPromise(index) {
    const delay = (Math.random() * 2 + 1).toFixed(3); // Between 1 and 3 seconds
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ name: Promise ${index}, time: parseFloat(delay) });
        }, delay * 1000);
    });
}

const output = document.getElementById('output');


const promises = [
    createPromise(1),
    createPromise(2),
    createPromise(3)
];

Promise.all(promises).then(results => {
    
    output.innerHTML = "";

  
    results.forEach(result => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${result.name}</td>
            <td>${result.time.toFixed(3)}</td>
        `;
        output.appendChild(row);
    });

   
    const totalTime = Math.max(...results.map(r => r.time));
    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `
        <td>Total</td>
        <td>${totalTime.toFixed(3)}</td>
    `;
    output.appendChild(totalRow);
});