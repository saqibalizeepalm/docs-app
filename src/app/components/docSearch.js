'use client';
import React, { useState, useEffect } from 'react';
import { DocSearch } from '@docsearch/react';
import 'docsearch.js/dist/cdn/docsearch.css';
// import '../globals.css';
import '@docsearch/css/dist/style.css'; 

const DocuSearch = () => {
  return (
    <div className='flex justify-center'>
       <DocSearch
        appId="8MS2S5MXZR" // Replace with your Algolia app ID
        apiKey="92e4a4992547d97ce812e4ff8e7f6cb3" // Replace with your Algolia search-only API key
        indexName="app-pearl" 
        placeholder="..."
        transformItems={(items) =>
            items.map((item) => ({
              ...item,
              url: item.url, // Ensure this corresponds to your Next.js routing
            }))
          }
          hitComponent={({ hit }) => (
            <a href={hit.url}>
              {hit.title}
            </a>
          )}
      />
      </div>
  );
};

export default DocuSearch;
