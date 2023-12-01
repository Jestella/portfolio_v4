import { useState } from "react";
import DevlogItems from "../components/DevlogItems";
import Navbar from "../components/ui/Navbar";
import SearchBar from "../components/SearchBar";
import devlogData from "../json/devlogData.json";

const Devlog = () => {
  const [filteredItems, setFilteredItems] = useState(devlogData);

  const handleSearch = (query) => {
    console.log("Search query:", query);

    // Filter the initial items based on the search query
    const filteredItems = devlogData.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.sub.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredItems(query ? filteredItems : devlogData);
  };
  return (
    <div className="devlog">
      <Navbar />
      <div className="devlog-container">
        <div className="devlog">
          <h2 className="center">Development Log</h2>
          {/* <SearchBar onSearch={handleSearch} /> */}
          <DevlogItems items={filteredItems} />
        </div>
      </div>
    </div>
  );
};

export default Devlog;
