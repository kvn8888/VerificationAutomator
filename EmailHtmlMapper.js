const fs = require('fs');
// Initialize an object to hold the results
let associatedHTML = {};

function mapData(jsonData) {
    jsonData.forEach(item => {
        const email = item.Email;
    
        // Assuming you have a function to get the HTML content for each email
        const htmlContent = fs.readFile('All mail Including Spam and Trash.txt')
    
        // Regex to find the pattern
        const regex_pattern = '${emailPattern}[\\s\\S]*?Verify your email';
        const regex = new RegExp(regex_pattern);
        const match = regex.exec(htmlContent);
    
        
    
        if (match) {
            associatedHTML[email] = match[0];
        } else {
            associatedHTML[email] = "No match found";
        }
    });
}

function exportToFile(outputPath, ) {
    // Write results to a JSON file
    fs.writeFile('AssociatedHTML.json', JSON.stringify(associatedHTML, null, 2), (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Associated HTML saved to AssociatedHTML.json');
    });
}
