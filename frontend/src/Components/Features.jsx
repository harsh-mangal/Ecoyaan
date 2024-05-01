import React from "react";

const Features = () => {
  return (
    <div className="features-section">
      <div className="info">
        <h1>Carefully curated 
            <br />Eco-friendly products</h1>
        <button>Learn More</button>
      </div>
      <div className="graphics">
        <div className="card">
          <img src="https://free4kwallpapers.com/uploads/wallpaper/lush-green-beauty-of-nature-1024x768-wallpaper.jpg" alt="" />
          <h1>Environmental Benefits</h1>
          <p>
            Reduce your carbon footprint with every purchase. Our eco-friendly
            products are sourced sustainably, minimizing harm to the
            environment.
          </p>
        </div>
        <div className="card">
          <img src="https://authindia.com/wp-content/uploads/2020/01/HANDMADE1-510x340.jpeg" alt="" />
          <h1>Social Benefits</h1>
          <p>
            Empower communities and support ethical practices. Our products are
            ethically sourced, empowering local artisans and ensuring fair
            wages.
          </p>
        </div>
        <div className="card">
          <img src="https://imageio.forbes.com/specials-images/dam/imageserve/1074749548/0x0.jpg?format=jpg&width=1200" alt="" />
          <h1>Long-Term Impact</h1>
          <p>
            Invest in a sustainable future for generations to come. By choosing
            our products, you contribute to a healthier planet and leave a
            lasting legacy of environmental stewardship.
          </p>
        </div>
      </div>
      <p></p>
    </div>
  );
};

export default Features;
