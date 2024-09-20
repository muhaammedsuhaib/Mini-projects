document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const codeContainer = document.getElementById('code-container');

    // Sample content for each tab
    const tabContents = {
        'index.html': `
            <p><strong>index.html</strong></p>
            <pre>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;VS Code Theme&lt;/title&gt;
    &lt;link href="https://cdn.jsdelivr.net/npm/tailwindcss@^3.0/dist/tailwind.min.css" rel="stylesheet"&gt;
    &lt;script defer src="script.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body class="bg-gray-900 text-gray-200"&gt;
    &lt;div class="flex flex-col h-screen"&gt;
        &lt;header class="bg-gray-800 p-4 text-center"&gt;
            &lt;h1 class="text-xl font-bold"&gt;VS Code-like Interface&lt;/h1&gt;
        &lt;/header&gt;
        &lt;div class="flex flex-1"&gt;
            &lt;aside class="w-64 bg-gray-700 p-4"&gt;
                &lt;ul class="space-y-2"&gt;
                    &lt;li class="cursor-pointer hover:bg-gray-600 p-2 rounded"&gt;Explorer&lt;/li&gt;
                    &lt;li class="cursor-pointer hover:bg-gray-600 p-2 rounded"&gt;Search&lt;/li&gt;
                    &lt;li class="cursor-pointer hover:bg-gray-600 p-2 rounded"&gt;Source Control&lt;/li&gt;
                    &lt;li class="cursor-pointer hover:bg-gray-600 p-2 rounded"&gt;Run & Debug&lt;/li&gt;
                    &lt;li class="cursor-pointer hover:bg-gray-600 p-2 rounded"&gt;Extensions&lt;/li&gt;
                &lt;/ul&gt;
            &lt;/aside&gt;
            &lt;main class="flex-1 p-4 bg-gray-800"&gt;
                &lt;div class="border-b border-gray-600 mb-4 flex space-x-2"&gt;
                    &lt;div class="bg-gray-700 p-2 rounded tab" data-tab="index.html"&gt;index.html&lt;/div&gt;
                    &lt;div class="bg-gray-700 p-2 rounded tab" data-tab="styles.css"&gt;styles.css&lt;/div&gt;
                &lt;/div&gt;
                &lt;div id="code-container" class="bg-gray-900 border border-gray-600 p-4 rounded"&gt;
                    &lt;p&gt;/* Select a tab to view content */&lt;/p&gt;
                &lt;/div&gt;
            &lt;/main&gt;
        &lt;/div&gt;
        &lt;footer class="bg-gray-800 p-2 text-center"&gt;
            &lt;p&gt;Status Bar - Line 1, Column 1&lt;/p&gt;
        &lt;/footer&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
        `,
        'styles.css': `
            <p><strong>styles.css</strong></p>
            <pre>@tailwind base;
@tailwind components;
@tailwind utilities;
        `
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const content = tabContents[tab.dataset.tab];
            codeContainer.innerHTML = `<pre>${content}</pre>`;
            tabs.forEach(t => t.classList.remove('bg-gray-800', 'text-gray-200'));
            tab.classList.add('bg-gray-800', 'text-gray-200');
        });
    });
});
