'use client';
import React, { useState, useEffect } from 'react';
import { DocSearch } from '@docsearch/react';
import 'docsearch.js/dist/cdn/docsearch.css';
// import '../globals.css';
import '@docsearch/css/dist/style.css'; 

const DocuSearch = () => {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       const inputExists = document.getElementById('docsearch');
//       console.log('-------', inputExists);
//       if (inputExists) {
//         docsearch({
//           apiKey: '4c7704154788f0bbf566b15b21c35c5e',
//           appId: 'T11OTANJ7U',
//           indexName: 'app-pearl',
//           container: '#docsearch',
//           placeholder: 'search...',
//           debug: false,
//         });
//       } else {
//         console.error('Input field does not exist!');
//       }
//     }, 0);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, []);

  return (
    <div className='flex justify-center'>
       <DocSearch
        appId="T11OTANJ7U" // Replace with your Algolia app ID
        apiKey="158ae7fb7ab370014a1df386cf0b9f2d" // Replace with your Algolia search-only API key
        indexName="app-pearl" 
        placeholder="..."
        // className="absolute top-4 left-4 w-100" // Add your desired styling
      />
      </div>
  );
};

export default DocuSearch;
