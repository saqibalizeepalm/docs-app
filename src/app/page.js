// src/app/page.js
import { redirect } from 'next/navigation'; // Import redirect
import fs from 'fs';
import path from 'path';

const DocsPage = async () => {
  const docsDirectory = path.join('src/app/docs'); // Use process.cwd() for server-side paths
  const files = fs.readdirSync(docsDirectory);
  
  const docs = files
    .filter((file) => file.endsWith('.md')) // Keep only .md files
    .map((file) => ({
      slug: file.replace('.md', ''),
    }));

  // Redirect to the first document if there are any
  if (docs.length > 0) {
    redirect(`/${docs[0].slug}`);
  }

  // If no documents, do not render anything
  return null; // Prevents rendering anything when there are no docs
};

export default DocsPage;
