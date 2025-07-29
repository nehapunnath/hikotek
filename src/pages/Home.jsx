import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import '../styles/Home.css';
import ProductViewer from '../components/ProductViewer';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const products = [
    { name: 'Vernier Caliper', image: "https://www.faithfulltools.com/images/full/FAICALVER.jpg" },
    { name: 'Digital Torque Driver', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnkmmhpHTq408nP2US0CqAitsA6RWHSKUb0A&s' },
    { name: 'PB 8326 Set A1', image: 'https://goodwill.in/pub/media/catalog/product/cache/affde3bad6fff216fce8dd9a3ef91de9/p/b/pb_8326.png' },
    { name: 'Jetech Bits', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUtv6_1kyROIOuD_FEkduwbdHy6yGD4ZauaA&s' },
    { name: 'Mechanical External Micrometer', image: 'https://bakergauges.com/wp-content/uploads/2015/08/prod-feat-micromet-mech-0-200-2b.jpg' },
  ];

  // Dynamic cards per view based on window width
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cardsPerView = windowWidth <= 768 ? 1 : 3;
  const maxSlide = Math.ceil(products.length - cardsPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const testimonials = [
    "Hikotek's dedication to quality and service stands out. Their team is knowledgeable, responsive, and ensures specific needs are met. Customers can always count on on-time deliveries and excellent support",
    "Hikotek has exceeded expectations as a reliable partner for mechanical components. They offer a wide range of products, and their expertise in electromechanical assemblies is exceptional. Their commitment to quality control and efficiency has helped streamline production processes and ensure products meet the highest standards.",
    "Hikotek provides a customer-centric experience with highly communicative teams. They provide fast turnaround times and offer tailored solutions to address unique challenges. Hikotek delivers with precision and dependability, allowing customers to focus on core business operations, whether for prototypes or high-volume production."
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const scrollToContact = () => {
    document.querySelector('.contact-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <div>
        <div className="search-bar-container">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search products"
              aria-label="Search"
            />
            <button type="button">Search</button>
          </div>
        </div>

        <div className="gallery-container">
          {/* <h2 className="gallery-title">Featured Products</h2> */}
          <div className="gallery-slider">
            <div
              className="gallery-track"
              style={{ transform: `translateX(-${currentSlide * (windowWidth <= 768 ? 260 : 310)}px)` }}
            >
              {products.map((product, index) => (
                <div className="gallery-card" key={index}>
                  <img
                    src={product.image}
                    alt={product.name}
                    // onError={(e) => (e.target.src = '/fallback-image.jpg')} // Fallback image
                  />
                  <p>{product.name}</p>
                </div>
              ))}
            </div>
          </div>
          <button className="gallery-nav prev" onClick={prevSlide} disabled={currentSlide === 0}>
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="gallery-nav next" onClick={nextSlide} disabled={currentSlide >= maxSlide}>
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="welcome-section">
          <h1>Welcome to Hikotek</h1>
          <p>
           Welcome to Hikotek! It is a leading manufacturer and exporter of innovative security and visual management solutions. The company is dedicated to providing global customers with top-quality products and excellent service, backed by its commitment to research and development and stringent quality control processes. Explore the wide range of products and experience the Hikotek difference.
          </p>
          {/* <button className="cta-button" onClick={scrollToContact}>
            Contact Us Now
          </button> */}
        </div>

        <section>
          <ProductViewer />
        </section>

        <section>
          <div className="testimonial-slider">
            <h2 className="testimonial-title">What Our Customers Say</h2>
            <div className="testimonial-card">
              <p className="testimonial-quote">“{testimonials[index]}”</p>
            </div>
            <div className="testimonial-dots">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`dot ${i === index ? 'active' : ''}`}
                  onClick={() => setIndex(i)}
                ></span>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="contact-section">
            <h2>Contact Us</h2>
            <p>Email: <a href="mailto:example@gmail.com">example@gmail.com</a></p>
            <div className="map-container">
              <iframe
                title="Hikotek Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019830076872!2d144.96305831531657!3d-37.81410797975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f7b64e2f%3A0xc7b3b5f4f07e62e6!2sFederation%20Square!5e0!3m2!1sen!2sin!4v1615923173654!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;