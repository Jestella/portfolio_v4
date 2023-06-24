import Navbar from "../components/Navbar";
import PortfolioItems from "../components/PortfolioItems";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Navbar />
      <div className="portfolio-container">
        <PortfolioItems />
      </div>
    </div>
  );
};

export default Portfolio;
