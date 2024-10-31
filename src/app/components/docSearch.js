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
        appId="T11OTANJ7U" // Replace with your Algolia app ID
        apiKey="158ae7fb7ab370014a1df386cf0b9f2d" // Replace with your Algolia search-only API key
        indexName="app-pearl" 
        placeholder="..."
      />
      </div>
  );
};

export default DocuSearch;
