// src/app/page.js
import { redirect } from 'next/navigation'; // Import redirect
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';

const DocsPage = async () => {
//   const docsDirectory = path.join('src/app/docs'); 
//   const files = fs.readdirSync(docsDirectory);
  
//   const docs = files
//     .filter((file) => file.endsWith('.md')) 
//     .map((file) => ({
//       slug: file.replace('.md', ''),
//     }));

 
    redirect(`/account-verification-html`);

};

export default DocsPage;
