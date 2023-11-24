import { useState } from "react";

function SearchBar({ onSearch, devlogData }) {
  const [query, setQuery] = useState("");
  const [matchingSuggestions, setMatchingSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
    console.log("Current query:", inputValue);

    // Filter suggestions based on the input value
    const suggestions = devlogData.filter(
      (item) =>
        item.title.toLowerCase().includes(inputValue.toLowerCase()) ||
        item.sub.toLowerCase().includes(inputValue.toLowerCase())
    );

    // Update the matching suggestions state
    setMatchingSuggestions(suggestions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
    setQuery("");
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSubmit} className="input-container">
        <input
          type="text"
          placeholder=" search"
          value={query}
          onChange={(e) => handleInputChange(e.target.value)}
          className="search-bar"
        />
        <button type="submit" className="btn-search" onClick={handleSubmit}>
          go
        </button>

        {matchingSuggestions.length > 0 && (
          <ul className="suggestions-list">
            {matchingSuggestions.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
}

export default SearchBar;
