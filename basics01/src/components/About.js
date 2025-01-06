import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Learn more about what we do and our mission</p>
      </div>
      <div className="about-content">
        <section>
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide the best culinary experience to food lovers around the world.
            We bring together top restaurants, customer reviews, and delivery options, all in one place.
          </p>
        </section>

        <section>
          <h2>Who We Are</h2>
          <p>
            We are a passionate team of food enthusiasts dedicated to making your dining experience seamless.
            Whether you're looking for a fine dining experience or a quick bite, we have something for everyone.
          </p>
        </section>

        <section>
          <h2>Our Values</h2>
          <ul>
            <li>Quality: We partner with only the best restaurants.</li>
            <li>Convenience: Fast and easy access to your favorite meals.</li>
            <li>Customer Satisfaction: We strive to provide the best service to our users.</li>
          </ul>
        </section>
      </div>

      <div className="about-footer">
        <p>© 2024 Meet N Eat. All rights reserved.</p>
      </div>
    </div>
  );
}

export default About;
