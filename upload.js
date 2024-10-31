// const fs = require('fs');
// const algoliasearch = require('algoliasearch');
const fs = require('fs');
const algoliasearch = require('algoliasearch');


// Replace with your Algolia app ID and API key
const ALGOLIA_APP_ID = 'T11OTANJ7U';
const ALGOLIA_API_KEY = '3a139ba062e2e7d2b56f78fe7f3e3e9e';
const INDEX_NAME = 'app-pearl';

// Initialize Algolia client
const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
const index = client.initIndex(INDEX_NAME);

// Read the JSON file
fs.readFile('output.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the JSON file:', err);
    return;
  }

  try {
    // Parse JSON data
    const records = JSON.parse(data);

    // Add records to the index
    index.saveObjects(records).then(({ objectIDs }) => {
      console.log('Records added:', objectIDs);
    }).catch(err => {
      console.error('Error adding records to Algolia:', err);
    });

  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
  }
});
