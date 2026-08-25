import "./PopularTours.css";

function PopularTours({ setSelectedDestination }) {
  const tours = [
    {
      title: "Kashmir",
      image:
        "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=900&q=80",
      description:
        "Explore the beautiful mountains, valleys and scenic landscapes of Kashmir.",
    },
    {
      title: "Rajasthan",
      image:
        "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=900&q=80",
      description:
        "Experience royal heritage, forts, culture and colourful cities of Rajasthan.",
    },
    {
      title: "Kerala",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80",
      description:
        "Discover peaceful backwaters, greenery and unforgettable experiences in Kerala.",
    },
    {
      title: "Mathura & Vrindavan",
      image:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80",
      description:
        "Plan a spiritual journey through the sacred destinations of Braj.",
    },
  ];

  const handleDestination = (destination) => {
    setSelectedDestination(destination);

    document.getElementById("booking")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="tours" className="popular-tours">
      <div className="section-heading">
        <p>POPULAR DESTINATIONS</p>

        <h2>Explore Incredible India</h2>

        <span>
          Discover destinations and plan your next memorable journey with
          Saxena Musafir.
        </span>
      </div>

      <div className="tour-grid">
        {tours.map((tour) => (
          <div className="tour-card" key={tour.title}>
            <img
              src={tour.image}
              alt={`${tour.title} tour`}
            />

            <div className="tour-content">
              <h3>{tour.title}</h3>

              <p>{tour.description}</p>

              <button
                type="button"
                onClick={() => handleDestination(tour.title)}
              >
                Explore Destination →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularTours;