import devlogData from "../json/devlogData.json";
import Link from "next/link";

const DevlogItems = ({}) => {
  return devlogData
    .slice(0)
    .reverse()
    .map((item) => {
      return (
        <div className="devlog-item" key={item.id}>
          <div className="devlog-box">
            <div className="devlog-textbox">
              <span className="month">{item.month}</span>
              <h3 className="devlog-box-title">{item.title}</h3>
              <p className="devlog-box-subtitle">{item.sub}</p>

              <div className="devlog-read">
                <span className="related-link">
                  + Link: {item.link}{" "}
                  <Link
                    href={item.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.linkUrl}
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    });
};

export default DevlogItems;
