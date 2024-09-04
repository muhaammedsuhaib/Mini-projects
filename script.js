document.addEventListener('DOMContentLoaded', () => {
    const data = [
        ["HTML Tags Reference", "HTML, CSS, JS", './HTML/index.html'],
        ["CSS Reference Guide", "HTML, CSS, JS", './CSS/index.html'],
        ["JavaScript Reference Guide", "HTML, CSS, JS", './JavaScript/index.html'],
        ["Scrolling Text animation", "HTML, CSS, JS , GSAP", './ScrollingTextanimation/index.html'],
        ["Create a Google Calendar Event", "HTML, CSS, JS ", './Create Google Calendar Event/index.html'],
        ["Canvas Drawing", "HTML, CSS, JS ", './canvas/index.html'],
        ["HoverFlow", "HTML, CSS, JS ", './HoverFlow/index.html'],
        ["Online JavaScript Compiler", "HTML, CSS, JS ,Tailwind css", './Jscompiler/index.html'],
        ["Online HTML Compiler", "HTML, CSS, JS ,Tailwind css", './Htmlcompiler/index.html'],
    ];

    const tableBody = document.querySelector('#data-table tbody');
    const searchInput = document.querySelector('#search-input');

    function renderTable(data) {
        tableBody.innerHTML = ''; // Clear existing rows
        data.forEach(rowData => {
            const row = document.createElement('tr');

            rowData.forEach((cellData, index) => {
                const cell = document.createElement('td');
                cell.className = 'border border-gray-300  p-3 hover:bg-gray-100 hover:text-red-600 transition-colors duration-300';

                if (index === 2) {  // Assuming the 3rd item in the array is the URL
                    const link = document.createElement('a');
                    link.href = cellData;
                    link.textContent = "View Project";  // Text for the link
                    link.target = "_blank"; // Open link in a new tab
                    link.className = 'text-blue-500 hover:underline';
                    cell.appendChild(link);
                    cell.setAttribute('data-label', 'Link');
                } else {
                    cell.textContent = cellData;
                    cell.setAttribute('data-label', ['Project Name', 'Technologies Used'][index]);
                }
                row.appendChild(cell);
            });

            row.classList.add('transition-transform', 'duration-300');  // Add class for animation
            tableBody.appendChild(row);
        });
    }

    // Initial table render
    renderTable(data);

    // Search functionality
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredData = data.filter(row => 
            row.some(cell => cell.toLowerCase().includes(query))
        );
        renderTable(filteredData);
    });
});
