import DevlogItems from "../components/DevlogItems";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

const Devlog = () => {
  const handleSearch = (query) => {
    // Handle search functionality based on the query
    console.log("Search query:", query);
    // Add your search logic here
  };
  return (
    <div className="devlog">
      <Navbar />
      <div className="devlog-container">
        <div className="devlog">
          <h2 className="center">Work & Study Log</h2>
          <SearchBar onSearch={handleSearch} />
          <DevlogItems />
        </div>
      </div>
    </div>
  );
};

export default Devlog;
