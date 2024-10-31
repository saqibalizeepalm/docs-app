const fs = require('fs');

// Read the Markdown file
const markdownContent = fs.readFileSync('wellbility.md', 'utf8');

// Split content into logical chunks (you canjust the delimiter)
const chunks = markdownContent.split(/(?<=[.!?])\s+/);

// Create an array to hold the key-value pairs
const jsonData = [];

// Function to get the first N words from a string
const getFirstNWords = (text, n) => {
    return text.split(/\s+/).slice(0, n).join(' ');
};

// Create key-value pairs
chunks.forEach(chunk => {
    // Generate key (first 100 words)
    const key = getFirstNWords(chunk, 100); // Get first 100 words
    const value = chunk; // Use the entire chunk as the value

    // Create the object and push it to the array
    jsonData.push({ [key]: value });
});

// Write the data to a single JSON file
fs.writeFileSync('output.json', JSON.stringify(jsonData, null, 2));
console.log(`Saved: output.json (${jsonData.length} objects)`);
