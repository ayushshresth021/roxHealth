import React from 'react';
import './Landingpage.css';

function LandingPage() {
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
          <button className="hero-button">Get Started</button>
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
      <section id="about" className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Users Say</h2>
          <div className="testimonial-list">
            <div className="testimonial-item">
              <p>"RoxHealth AI has truly transformed my approach to mental health. The insights are spot on!"</p>
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

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <p>Email us at <a href="mailto:contact@roxhealth.ai">contact@roxhealth.ai</a></p>
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
