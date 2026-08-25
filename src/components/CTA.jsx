import "./CTA.css";

function CTA() {
  const handlePlanTrip = () => {
    document.getElementById("booking")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="cta-section">
      <div className="cta-content">
        <p>READY FOR YOUR NEXT JOURNEY?</p>

        <h2>
          Let's Make Your <span>Next Trip Memorable</span>
        </h2>

        <p className="cta-description">
          Tell us where you want to go and let us help you plan your journey.
        </p>

        <div className="cta-buttons">
          <button
            type="button"
            className="cta-primary"
            onClick={handlePlanTrip}
          >
            Plan My Trip →
          </button>

          <button
            type="button"
            className="cta-secondary"
            onClick={handleContact}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;