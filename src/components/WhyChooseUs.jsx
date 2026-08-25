import "./WhyChooseUs.css";

function WhyChooseUs() {
  const reasons = [
    {
      icon: "🚗",
      title: "Comfortable Vehicles",
      description:
        "Choose from comfortable travel options for local and outstation journeys.",
    },
    {
      icon: "🧑‍✈️",
      title: "Experienced Drivers",
      description:
        "Travel with professional drivers focused on a smooth and comfortable journey.",
    },
    {
      icon: "💰",
      title: "Transparent Pricing",
      description:
        "Clear pricing information so you can plan your trip with confidence.",
    },
    {
      icon: "🗺️",
      title: "Personalized Trips",
      description:
        "Plan journeys according to your destination, schedule and travel needs.",
    },
    {
      icon: "📱",
      title: "Easy Booking",
      description:
        "Send your travel enquiry easily and get assistance with your journey.",
    },
    {
      icon: "🤝",
      title: "Travel Support",
      description:
        "Get support throughout your travel planning and booking process.",
    },
  ];

  const handleBooking = () => {
    document.getElementById("booking")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="why-section">
      <div className="why-heading">
        <p>WHY SAXENA MUSAFIR?</p>

        <h2>Travel With Confidence</h2>

        <span>
          We aim to make every journey comfortable, convenient and memorable.
        </span>
      </div>

      <div className="why-grid">
        {reasons.map((reason) => (
          <div className="why-card" key={reason.title}>
            <div className="why-icon">{reason.icon}</div>

            <h3>{reason.title}</h3>

            <p>{reason.description}</p>

            <button
              type="button"
              onClick={handleBooking}
              style={{
                border: "none",
                background: "transparent",
                padding: "0",
                marginTop: "15px",
                color: "#e67e22",
                fontSize: "14px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Plan Your Trip →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;