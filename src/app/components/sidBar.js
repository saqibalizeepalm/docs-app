// src/app/components/Sidebar.js
"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import from next/navigation
import { FiFileText } from 'react-icons/fi'; // Example icon

const Sidebar = ({ docs }) => {
    const pathname = usePathname();

 
  return (
    <nav className="w-1/5 bg-gray-800 text-white p-4 h-screen overflow-y-auto shadow-lg sticky top-0"> {/* Sticky sidebar */}
    <div className='flex justify-center'>
    <h2 className="text-lg  text-center font-semibold mb-4">Documentation</h2>
    </div>
    
      <ul className="list-none p-0">
        {docs.map((doc) => (
          <li key={doc.slug} className="mb-2">
            <Link 
              href={`/${doc.slug}`} 
              className={`flex items-center py-2 px-4 rounded transition-colors ${
                pathname === `/${doc.slug}` 
                  ? 'bg-gray-700 text-yellow-300' // Active link style
                  : 'hover:bg-gray-600'
              }`}
            >
              <FiFileText className="mr-2" /> {/* Icon */}
              {doc.slug}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
