import { useEffect, useState } from "react";
import "./BookingForm.css";

function BookingForm({
  selectedDestination,
  setSelectedDestination,
  selectedService,
  setSelectedService,
}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    destination: "",
    travelDate: "",
    travellers: "",
    vehicle: "",
  });

  useEffect(() => {
    if (selectedDestination) {
      setFormData((previous) => ({
        ...previous,
        destination: selectedDestination,
      }));
    }
  }, [selectedDestination]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (name === "destination") {
      setSelectedDestination(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = `Hello Saxena Musafir Tour & Travels!

Name: ${formData.name}
Phone: ${formData.phone}
Destination: ${formData.destination}
Travel Date: ${formData.travelDate}
Travellers: ${formData.travellers}
Vehicle: ${formData.vehicle}
${selectedService ? `Service: ${selectedService}` : ""}`;

    const whatsappUrl = `https://wa.me/918225876121?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");

    setSelectedService("");
  };

  return (
    <section id="booking" className="booking-section">
      <div className="booking-container">

        <div className="booking-intro">
          <p>PLAN YOUR JOURNEY</p>

          <h2>Where Would You Like To Go?</h2>

          <span>
            Share your travel details and we will help you plan your journey.
          </span>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>

          {selectedService && (
            <div className="selected-service">
              <strong>Selected Service:</strong>{" "}
              {selectedService}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name">Your Name</label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>

            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="destination">Destination</label>

            <input
              id="destination"
              name="destination"
              type="text"
              placeholder="Where do you want to go?"
              value={formData.destination}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="travelDate">Travel Date</label>

            <input
              id="travelDate"
              name="travelDate"
              type="date"
              value={formData.travelDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="travellers">Travellers</label>

            <select
              id="travellers"
              name="travellers"
              value={formData.travellers}
              onChange={handleChange}
              required
            >
              <option value="">Select travellers</option>
              <option value="1-2">1–2 People</option>
              <option value="3-5">3–5 People</option>
              <option value="6-10">6–10 People</option>
              <option value="10+">10+ People</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="vehicle">Vehicle</label>

            <select
              id="vehicle"
              name="vehicle"
              value={formData.vehicle}
              onChange={handleChange}
              required
            >
              <option value="">Select vehicle</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Tempo Traveller">
                Tempo Traveller
              </option>
              <option value="Bus">Bus</option>
              <option value="Current Available">
                Current Available
              </option>
            </select>
          </div>

          <button
            type="submit"
            className="booking-submit"
          >
            Send Travel Enquiry →
          </button>

        </form>
      </div>
    </section>
  );
}

export default BookingForm;