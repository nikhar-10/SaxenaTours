import "./Testimonials.css";

function Testimonials() {
  const experiences = [
    {
      name: "Family Travel",
      location: "Travel Experience",
      review:
        "Plan comfortable family journeys with suitable vehicles, destinations and travel assistance.",
    },
    {
      name: "Group Travel",
      location: "Group Journey",
      review:
        "Make group trips easier by choosing suitable travel options according to your destination and group size.",
    },
    {
      name: "Pilgrimage Travel",
      location: "Spiritual Journey",
      review:
        "Plan peaceful pilgrimage journeys with comfortable travel arrangements and helpful assistance.",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-heading">
        <p>TRAVEL INSPIRATION</p>

        <h2>Journeys Worth Remembering</h2>

        <span>
          Explore travel experiences and plan a journey that suits your needs.
        </span>
      </div>

      <div className="testimonials-grid">
        {experiences.map((experience) => (
          <div
            className="testimonial-card"
            key={experience.name}
          >
            <div className="stars">★★★★★</div>

            <p className="review-text">
              "{experience.review}"
            </p>

            <div className="review-person">
              <div className="review-avatar">
                {experience.name.charAt(0)}
              </div>

              <div>
                <h3>{experience.name}</h3>

                <span>{experience.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;