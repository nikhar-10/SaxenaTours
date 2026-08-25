import "./About.css";

function About() {
  const handleDiscoverMore = () => {
    document.getElementById("booking")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1000&q=80"
            alt="Travel journey with Saxena Musafir"
          />

          <div className="about-badge">
            <strong>Explore</strong>
            <span>India With Us</span>
          </div>
        </div>

        <div className="about-content">
          <p className="about-tag">
            ABOUT SAXENA MUSAFIR
          </p>

          <h2>
            Your Journey Begins With
            <span>The Right Travel Partner</span>
          </h2>

          <p>
            Saxena Musafir is a tour and travel platform designed to make
            travel planning simple, comfortable and convenient.
          </p>

          <p>
            From local and outstation taxi services to tour packages,
            pilgrimage journeys and travel assistance, we aim to bring
            different travel needs together in one place.
          </p>

          <div className="about-points">
            <div>
              <span>✓</span>
              Comfortable Travel
            </div>

            <div>
              <span>✓</span>
              Reliable Service
            </div>

            <div>
              <span>✓</span>
              Easy Planning
            </div>

            <div>
              <span>✓</span>
              Customer Support
            </div>
          </div>

          <button
            type="button"
            className="about-btn"
            onClick={handleDiscoverMore}
          >
            Discover More →
          </button>
        </div>

      </div>
    </section>
  );
}

export default About;