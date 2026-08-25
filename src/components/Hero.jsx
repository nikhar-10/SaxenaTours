import "./Hero.css";

function Hero() {
  const handlePlanTrip = () => {
    document.getElementById("booking")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleExploreTours = () => {
    document.getElementById("tours")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">

        <p className="hero-tag">
          EXPLORE INDIA WITH SAXENA MUSAFIR
        </p>

        <h1>
          Your Journey,
          <span>Our Responsibility.</span>
        </h1>

        <p className="hero-description">
          Discover comfortable travel, memorable tours and reliable travel
          assistance for journeys across India.
        </p>

        <div className="hero-buttons">
          <button
            type="button"
            className="hero-primary"
            onClick={handlePlanTrip}
          >
            Plan Your Trip →
          </button>

          <button
            type="button"
            className="hero-secondary"
            onClick={handleExploreTours}
          >
            Explore Tours
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;