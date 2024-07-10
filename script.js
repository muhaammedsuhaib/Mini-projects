document.addEventListener('DOMContentLoaded', () => {
    const data = [
        ["Sidebar", "HTML, Tailwindcss", './Sidebar/index.html'],
        ["Project 2", "HTML, CSS, React", './project2/index.html'],
        ["Project 3", "HTML, CSS, Node.js", './project3/index.html']
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
                cell.setAttribute('data-label', ['Projects Name', 'What is Using'][index]);
            }
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });
});
