import React from 'react';
import './Shop.css';

const products = [
  {
    name: 'French Fries',
    oldPrice: '49$',
    newPrice: '28$',
    imgUrl: 'https://media.istockphoto.com/id/182752085/photo/french-fries-in-bowl.webp?b=1&s=170667a&w=0&k=20&c=93XJYFNSodybD4SP1aSb4wZnJYoSowP1RVsosAt8fI0=', // Replace with your image URL
  },
  {
    name: 'Salad',
    oldPrice: '49$',
    newPrice: '29$',
    imgUrl: 'https://media.istockphoto.com/id/175197961/photo/salad-plate.webp?b=1&s=170667a&w=0&k=20&c=vQQY3z-4zO10WZxqVqJ_tBzM2cvXKu-EcKXQE3A70fg=', // Replace with your image URL
  },
  {
    name: 'Chessy Pizza',
    oldPrice: '49$',
    newPrice: '35$',
    imgUrl: 'https://media.istockphoto.com/id/905492462/photo/pizza-margarita-with-mozzarella-cheese-basil-and-tomato-template-for-your-design-and-menu-of.webp?b=1&s=170667a&w=0&k=20&c=TWSss16jDXtbD9lfaux_GVkjW82ZCQLZwuF6kxIKizc=', // Replace with your image URL
  },
  {
    name: 'Brosted Burger',
    oldPrice: '49$',
    newPrice: '29$',
    imgUrl: 'https://media.istockphoto.com/id/1273265655/photo/burger-with-fried-chicken-meat-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=DOxG4kmY1rS0UcTXrsmTHs0ElCUk1SHFDQaYGw1lrJI=', // Replace with your image URL
  },
  {
    name: 'Mushroom pizza',
    oldPrice: '49$',
    newPrice: '39$',
    imgUrl: 'https://media.istockphoto.com/id/661409274/photo/mushroom-omelet-on-plate-top-view-isolated.webp?b=1&s=170667a&w=0&k=20&c=ZZz6zs-qHgedV8m7Tg5_mjSSM-PuHVmCxdkFG9mPx4w=', // Replace with your image URL
  },
  {
    name: 'Noodles',
    oldPrice: '39$',
    newPrice: '29$',
    imgUrl: 'https://media.istockphoto.com/id/908165344/photo/pasta-with-meat-and-vegetables-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=13KEeHdgBUezcK5Jha7P_izbh9xZURQN4qQnhjYey-o=', // Replace with your image URL
  },
];

const Shop = () => {
  return (
    <div className="shop-container">
      
      
      <div className="products-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.imgUrl} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <div className="price">
              <span className="old-price">{product.oldPrice}</span>
              <span className="new-price">{product.newPrice}</span>
            </div>
            <button className="add-to-cart">Add to cart</button>
            <span className="sale-badge">Sale!</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;

