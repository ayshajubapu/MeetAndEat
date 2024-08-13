
import "./Bookt.css"; // Import a CSS file for styling

const Bookt = () => {
  return (
    <div className="book-table-container">
      <div className="overlay">
        <h1 className="title">BOOK A TABLE</h1>
        <p className="subtitle">
          Our 3 Michelin Stars ensure that your experience regarding our cuisine
          will be one that you will not forget.
        </p>
        <button className="book-now-btn">BOOK NOW</button>
      </div>
    </div>
  );
};

export default Bookt;
