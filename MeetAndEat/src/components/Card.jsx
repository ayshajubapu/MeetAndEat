import './Card.css';

export default function Card() {
  const images = [
    "https://images.unsplash.com/photo-1528556860752-2a6a19a285a3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SlVJQ0V8ZW58MHx8MHx8fDA%3D", 
    "https://images.unsplash.com/photo-1514995428455-447d4443fa7f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEpVSUNFfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1506802913710-40e2e66339c9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEpVSUNFfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1523371054106-bbf80586c38c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fEpVSUNFfGVufDB8fDB8fHww"
  ];

  return (
    <div className="box-container">
      {images.map((image, index) => (
        <div className="box" key={index}>
          <img src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}
