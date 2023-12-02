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
        const outputPath = 'Accounts.json';

        // Write the JSON string to the file
        fs.writeFile(outputPath, json, 'utf8', (err) => {
            if (err) {
                console.error('An error occurred:', err);
                return;
            }
            console.log(`Saved JSON to ${outputPath}`);
        });
});

// Function to read and parse the JSON file
function readJsonFile(filePath) {
    try {
        // Read the file synchronously
        const jsonString = fs.readFileSync(filePath, 'utf8');

        // Parse the JSON string into an object
        const jsonData = JSON.parse(jsonString);

        return jsonData;
    } catch (err) {
        console.error('Error reading file:', err);
        return null;
    }
}

// Use the function to read your JSON file
const jsonFilePath = 'Accounts.json'; // Path to your JSON file
const jsonData = readJsonFile(jsonFilePath);
if (jsonData) {
    console.log(jsonData[1]); // Accessing the second element in the JSON array
}

module.exports = {
    createReadStream,
    readJsonFile,
    jsonData
}
