import React, { useState } from 'react';

function Page() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const response = await fetch(`/api/search?searchTerm=${encodeURIComponent(searchTerm)}`);
    const data = await response.json();
    setSearchResults(data.results);
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {searchResults.map(result => (
          <li key={result._id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Page;
