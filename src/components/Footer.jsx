import "./Footer.css";

function Footer() {
  const phoneNumber = "918225876121";
  const whatsappNumber = "918225876121";
  const email = "saxenanikhar10@gmail.com";

  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>SAXENA MUSAFIR</h2>

          <p>
            Your journey partner for tours, taxi services and memorable
            travel experiences across India.
          </p>

          <div className="social-links">
            <a href="#" aria-label="Instagram">
              Instagram
            </a>

            <a href="#" aria-label="Facebook">
              Facebook
            </a>

            <a href="#" aria-label="YouTube">
              YouTube
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#tours">Tours</a>
          <a href="#services">Services</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-column">
          <h3>Our Services</h3>

          <a href="#services">Taxi Service</a>
          <a href="#tours">Tour Packages</a>
          <a href="#services">Hotel Booking</a>
          <a href="#services">Airport Transfer</a>
        </div>

        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>

          <a href={`tel:+${phoneNumber}`}>
            📞 8225876121
          </a>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 WhatsApp Us
          </a>

          <a href={`mailto:${email}`}>
            ✉️ {email}
          </a>

          <p>📍 Delhi Cantt, Delhi</p>
          <p>🕐 24 Hours Available</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Saxena Musafir Tour & Travels. All Rights Reserved.
        </p>

        <p>Explore India. Travel Better.</p>
      </div>
    </footer>
  );
}

export default Footer;