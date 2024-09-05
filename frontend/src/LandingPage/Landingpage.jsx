import React, { useEffect, useState } from 'react';
import './LandingPage.css';

function LandingPage() {
  const [timer, setTimer] = useState('');

  // Countdown timer logic for FOMO
  useEffect(() => {
    // Set the end time to 15 days from now (calculated once)
    const end = new Date(new Date().getTime() + 15 * 24 * 60 * 60 * 1000).getTime();
  
    const countdown = () => {
      const now = new Date().getTime(); // Current time
      const timeLeft = end - now; // Calculate time left
  
      if (timeLeft >= 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
        setTimer(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      } else {
        // When the countdown is finished
        setTimer('Offer expired');
        clearInterval(interval);
      }
    };
  
    const interval = setInterval(countdown, 1000); // Update every second
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);
  
  

  return (
    <div className="landing-page">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="container">
          <a href="#" className="logo">RoxHealth AI</a>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#product">Product</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <h1 className="hero-title">Welcome to RoxHealth AI</h1>
          <p className="hero-subtitle">
            Revolutionizing Mental Health with AI-Powered Assistance
          </p>
          <button className="hero-button">Get Started for Free</button>
        </div>
      </section>

      {/* Scarcity Section */}
      <section className="scarcity">
        <div className="container">
          <p className="scarcity-text">Limited spots available for early access! Don't miss out.</p>
        </div>
      </section>

      {/* Features Section */}
      <section id="product" className="features">
        <div className="container">
          <h2 className="section-title">Features</h2>
          <div className="feature-list">
            <div className="feature-item">
              <h3>Sentiment Analysis</h3>
              <p>Understand your emotional state through advanced AI algorithms.</p>
            </div>
            <div className="feature-item">
              <h3>Personalized Learning</h3>
              <p>Receive tailored advice and activities to improve your mental well-being.</p>
            </div>
            <div className="feature-item">
              <h3>Emotional State Tracking</h3>
              <p>Track your mood and progress over time with insightful visualizations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Users Say</h2>
          <div className="testimonial-list">
            <div className="testimonial-item">
              <p>"RoxHealth AI has truly transformed my mental health journey!"</p>
              <h4>- Alex M.</h4>
            </div>
            <div className="testimonial-item">
              <p>"The personalized learning experiences have helped me manage stress more effectively."</p>
              <h4>- Emma L.</h4>
            </div>
            <div className="testimonial-item">
              <p>"I love the emotional state tracking feature. It’s amazing to see my progress over time!"</p>
              <h4>- Sophia R.</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="authority">
        <div className="container">
          <h2>Endorsed by Mental Health Experts</h2>
          <p>RoxHealth AI is backed by leading psychologists and mental health organizations.</p>
        </div>
      </section>

      {/* FOMO Section */}
      <section className="fomo">
        <div className="container">
          <h2>Offer Ends In:</h2>
          <p className="countdown">{timer}</p>
        </div>
      </section>

      {/* Reciprocity Section */}
      <section className="reciprocity">
        <div className="container">
          <h2>Get a Free Mental Health eBook!</h2>
          <p>Sign up today and receive expert tips on managing your mental health.</p>
          <button className="cta-button">Download Now</button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <p>© 2024 RoxHealth AI. All rights reserved.</p>
          <ul className="footer-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
