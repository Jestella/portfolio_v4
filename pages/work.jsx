import Navbar from "../components/ui/Navbar";
import PortfolioItems from "../components/PortfolioItems";

const Work = () => {
  return (
    <div className="portfolio">
      <Navbar />
      <div className="portfolio-container">
        <PortfolioItems />
      </div>
    </div>
  );
};

export default Work;
