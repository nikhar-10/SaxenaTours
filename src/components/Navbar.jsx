import "./Navbar.css";

function Navbar() {
  const phoneNumber = "918225876121";

  return (
    <nav>
      <div>SAXENA MUSAFIR</div>

      <div>
        <a href="#home">Home</a>
        <a href="#tours">Tours</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <div>
        <a
          href={`tel:+${phoneNumber}`}
          className="nav-button"
        >
          Call Now
        </a>

        <a
          href={`https://wa.me/${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-button whatsapp-button"
        >
          WhatsApp
        </a>
      </div>
    </nav>
  );
}

export default Navbar;