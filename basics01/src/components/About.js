import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1 className="about-us-heading">Hi, we’re Meet N Eat.</h1>
        <p className="about-us-text">
          We’re on a mission to make every meal a moment to savor. With fresh, flavorful, and
          thoughtfully crafted dishes, we bring the joy of dining right to your doorstep. Whether
          it’s comfort food, indulgent treats, or healthy bites, we’re here to satisfy your cravings
          with style and convenience. Let’s make mealtime extraordinary—one delivery at a time.
        </p>
      </div>
      <div className="about-us-image">
        <img
          src="https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your aesthetic image URL
          alt="Aesthetic food delivery"
        />
      </div>
    </div>
  );
};

export default AboutUs;
