const fs = require('fs');
import { jsonData } from './Parser';
// Initialize an object to hold the results
let associatedHTML = {};

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

// Function to get HTML content (placeholder)
function getHTMLContentForEmail(email) {
    // Placeholder: Implement logic to retrieve HTML content based on email
    return ""; // Return the HTML content as a string
}

// Write results to a JSON file
fs.writeFile('AssociatedHTML.json', JSON.stringify(associatedHTML, null, 2), (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Associated HTML saved to AssociatedHTML.json');
});
