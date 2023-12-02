const fs = require('fs');
const csv = require('csv-parse');
const output = [];

fs.createReadStream('Accounts.csv')
    .pipe(csv.parse({ columns: true }))
    .on('data', (data) => output.push(data))
    .on('end', () => {
        // Convert the output array to a JSON string
        const json = JSON.stringify(output);

        // Specify the path for the output file
        const outputPath = 'path/to/your/Accounts.json';

        // Write the JSON string to the file
        fs.writeFile(outputPath, json, 'utf8', (err) => {
            if (err) {
                console.error('An error occurred:', err);
                return;
            }
            console.log(`Saved JSON to ${outputPath}`);
        });
    });
