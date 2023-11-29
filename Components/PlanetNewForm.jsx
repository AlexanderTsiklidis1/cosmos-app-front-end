import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

function PlanetNewForm() {
  const [planet, setPlanet] = useState({
    planetname: "",
    description: "",
    is_current_planet: true,
    diameter_km: 0,
    mass_kg: 0,
    avg_temperature_celsius: 0,
    planet_picture: "",
  });

  const navigate = useNavigate();

  const handleTextChange = (event) => {
    setPlanet({ ...planet, [event.target.id]: event.target.value });
  };

  const addPlanet = () => {
    console.log("Planet to be added:", planet);
    const httpOptions = {
      method: "POST",
      body: JSON.stringify(planet),
      headers: {
        "Content-type": "application/json",
      },
    };

    fetch(`${API}/planets`, httpOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log("Response from server:", data);
        alert(`${planet.planetname} was added to the database!`);
        navigate("/planets");
      })
      .catch((err) => console.error(err));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addPlanet();
  };

  return (
    <div className="new-planet-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="planetname">Celestial Object Name</label>
        <input
          id="planetname"
          type="text"
          value={planet.planetname}
          onChange={handleTextChange}
          placeholder="Planet Name"
          required
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={planet.description}
          placeholder="Description of the Planet"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="diameter_km">Diameter (in km)</label>
        <input
          id="diameter_km"
          type="number"
          value={planet.diameter_km}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="mass_kg">Mass (in kg)</label>
        <input
          id="mass_kg"
          type="number"
          value={planet.mass_kg}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="avg_temperature_celsius">Avg Temperature (°C)</label>
        <input
          id="avg_temperature_celsius"
          type="number"
          value={planet.avg_temperature_celsius}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="planet_picture">Celestial Picture</label>
        <input
          id="planet_picture"
          type="text"
          value={planet.planet_picture}
          placeholder="Link to Celestial Picture"
          onChange={handleTextChange}
        />
        <br />
        <input type="submit" className="submit-button" />
      </form>
      <Link to="/planets">
        <button className="button">Back to Planets</button>
      </Link>
    </div>
  );
}

export default PlanetNewForm;
