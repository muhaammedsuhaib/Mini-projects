document.addEventListener('DOMContentLoaded', () => {
    const data = [
        ["HTML Tags Reference", "HTML, CSS, JS", './HTML/index.html'],
        ["CSS Reference Guide", "HTML, CSS, JS", './CSS/index.html'],
        ["JavaScript Reference Guide", "HTML, CSS, JS", './JavaScript/index.html'],
    ];

    const tableBody = document.querySelector('#data-table tbody');

    data.forEach(rowData => {
        const row = document.createElement('tr');

        rowData.forEach((cellData, index) => {
            const cell = document.createElement('td');

            if (index === 2) {  // Assuming the 3rd item in the array is the URL
                const link = document.createElement('a');
                link.href = cellData;
                link.textContent = "View Project";  // Text for the link
                link.target = "_blank"; // Open link in a new tab
                cell.appendChild(link);
                cell.setAttribute('data-label', 'Link');
            } else {
                cell.textContent = cellData;
                cell.setAttribute('data-label', ['Project Name', 'Technologies Used'][index]);
            }
            row.appendChild(cell);
        });

        row.classList.add('table-row');  // Add class for animation
        tableBody.appendChild(row);
    });
});
