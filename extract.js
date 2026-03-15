const fs = require('fs');
const html = fs.readFileSync('CMP SAS Corrosión y Proof Coating 🏗️.html', 'utf8');
const text = html.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]+>/g, '\n')
    .replace(/\n+/g, '\n')
    .trim();
fs.writeFileSync('output.txt', text);
