
import './SpecialOffer.css'; // Import CSS file for styling

const SpecialOffer = () => {
  return (
    <div className="special-offer">
      <div className="special-offer-image">
        <img src="https://media.istockphoto.com/id/959027020/photo/pizza-on-a-wooden-surface-with-seasonings-and-fresh-juice.webp?b=1&s=170667a&w=0&k=20&c=U4bqeBJx1Ga6oXuLkbKHlIXnZgUfsn0VTkC9nUgPNlg=" alt="Food and Drink" />
      </div>
      <div className="special-offer-text">
        <h1>Today's Special</h1>
        <h2>Pizza</h2>
        <p>
          Our 3 Michelin Stars ensure that your experience regarding our cuisine
          will be one that you will not forget.
        </p>
      </div>
    </div>
  );
};

export default SpecialOffer;
