
import "./Menu.css";

const dishes = [
  {
    title: "Paneer Pizza",
    description: "This is a scrumptious homestyle Paneer Cheese Pizza with a mixed veggie and paneer and cheese topping.",
    price: "23% off",
    imgUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Chocolate Smoothie",
    description: "This chocolate smoothie uses bananas, peanut butter, milk, vanilla, and cocoa for a healthy.",
    price: "15% off",
    imgUrl: "https://media.istockphoto.com/id/521618573/photo/hot-chocolate.webp?b=1&s=170667a&w=0&k=20&c=AbcoZlmEVkW2NmV0CQpH8ibTa5491jJzQm9DoqHaGMA=",
  },
  {
    title: "Burger",
    description: "Grill Magic: Where Flavors Meet.",
    price: "10% off",
    imgUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Tortilla wrap",
    description: "Tortilla wraps are versatile and can be filled with a variety of ingredients.",
    price: "5% off",
    imgUrl: "https://media.istockphoto.com/id/665807568/photo/indian-popular-street-food-called-veg-franky-made-using-vegetables-wrapped-inside-paratha.webp?b=1&s=170667a&w=0&k=20&c=Bj3uIHSrjuSMQycADkMMIv3_VcySGli_mQnYa7CdLfI=",
  },
  {
    title: "Macrons",
    description: "Sweet everyone loves.",
    price: "20% off",
    imgUrl: "https://images.unsplash.com/photo-1581343659198-abab39bb36aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRlc3NlcnRzJTIwc3dlZXRzfGVufDB8fDB8fHww",
  },
  {
    title: "French Fries",
    description: "French fries are served hot, either soft or crispy, and are generally eaten as part of lunch or dinner.",
    price: "25% off",
    imgUrl: "https://media.istockphoto.com/id/1288600421/photo/french-fries-on-a-platter-with-tomato-ketchup-and-mayonnaise.webp?b=1&s=170667a&w=0&k=20&c=ZoILtmfuJGMVFve1OCDWNdjtU95dzeYyESs_SDnBUiU=",
  },
];

function Menu() {
  return (
    <div className="App">
      <h1>Our Exclusive Dishes</h1>
      <div className="card-container">
        {dishes.map((dish, index) => (
          <div className="card" key={index}>
            <img src={dish.imgUrl} alt={dish.title} />
            <div className="card-content">
              <h4>{dish.title}</h4>
              <p>{dish.description}</p>
              <p className="price">{dish.price}</p>
              <button className="order-button">Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
