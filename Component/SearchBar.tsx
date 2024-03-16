// components/SearchBar.tsx
import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="my-4">
      <input type="text" placeholder="Search..." className="border border-gray-300 px-4 py-2 w-full rounded-lg" />
    </div>
  );
};

export default SearchBar;
