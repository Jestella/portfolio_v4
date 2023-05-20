import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
    setQuery('');
  };

  return (
    <div className='search-bar-container'>
      <form onSubmit={handleSubmit} className='input-container'>
        <input
          type='text'
          placeholder=' search'
          value={query}
          onChange={handleInputChange}
          className='search-bar'
        />
        <button type='submit'>go</button>
      </form>
    </div>
  );
};

export default SearchBar;
