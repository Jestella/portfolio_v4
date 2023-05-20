import { useState } from 'react';

import styles from '../styles/SearchBar.module.scss';

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
    <div className={styles['search-bar-container']}>
      <form onSubmit={handleSubmit} className={styles['input-container']}>
        <input
          type='text'
          placeholder='search'
          value={query}
          onChange={handleInputChange}
          className={styles['search-bar']}
        />
        <button type='submit'>go</button>
      </form>
    </div>
  );
};

export default SearchBar;
