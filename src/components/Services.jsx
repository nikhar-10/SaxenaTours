import "./Services.css";

function Services({ setSelectedService }) {
  const services = [
    {
      icon: "🚕",
      title: "Cab & Taxi Service",
      description:
        "Comfortable cars for local, outstation and long-distance journeys.",
    },
    {
      icon: "🚌",
      title: "Tempo Traveller",
      description:
        "Spacious vehicles for families, groups and memorable road trips.",
    },
    {
      icon: "🏔️",
      title: "Tour Packages",
      description:
        "Explore popular destinations across India with planned tour options.",
    },
    {
      icon: "🏨",
      title: "Hotel Booking",
      description:
        "Find suitable stays according to your destination and travel plans.",
    },
    {
      icon: "🛕",
      title: "Pilgrimage Tours",
      description:
        "Comfortable travel arrangements for spiritual and religious journeys.",
    },
    {
      icon: "✈️",
      title: "Airport Transfer",
      description:
        "Convenient pickup and drop services for airport travel.",
    },
  ];

  const handleService = (service) => {
    setSelectedService(service);

    document.getElementById("booking")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="services" className="services-section">
      <div className="services-heading">
        <p>OUR SERVICES</p>

        <h2>Everything You Need For Your Journey</h2>

        <span>
          Travel comfortably with services designed around your journey.
        </span>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <button
              type="button"
              onClick={() => handleService(service.title)}
            >
              Learn More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;