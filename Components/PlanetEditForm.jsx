import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

function PlanetEditForm() {
  const { index } = useParams();
  const [planet, setPlanet] = useState({
    planetname: "",
    description: "",
    diameter_km: 0,
    mass_kg: 0,
    avg_temperature_celsius: 0,
    planet_picture: "",
    is_current_planet: true,
  });
  const navigate = useNavigate();

  const handleTextChange = (event) => {
    setPlanet({ ...planet, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setPlanet({ ...planet, is_current_planet: !planet.is_current_planet });
  };

  const updatePlanet = () => {
    console.log(`${API}/planets/${index}`);

    fetch(`${API}/planets/${index}`, {
      method: "PUT",
      body: JSON.stringify(planet),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        navigate(`/planets/${index}`);
      })
      .catch((error) => console.error("catch", error));
  };

  // On page load, fill in the form with the bookmark data.
  useEffect(() => {
    fetch(`${API}/planets/${index}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        setPlanet(responseJSON);
      })
      .catch((error) => console.error(error));
  }, [index]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updatePlanet();
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="planetname">Planet Name</label>
        <input
          id="planetname"
          type="text"
          value={planet.planetname}
          onChange={handleTextChange}
          placeholder="Name of the Planet"
          
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={planet.description}
          placeholder="Description of the Planet"
          onChange={handleTextChange}
          
        />
        <label htmlFor="diameter_km">Diameter (in km)</label>
        <input
          id="diameter_km"
          type="number"
          value={planet.diameter_km}
          onChange={handleTextChange}
          
        />
        <label htmlFor="mass_kg">Mass (in kg)</label>
        <input
          id="mass_kg"
          type="number"
          value={planet.mass_kg}
          onChange={handleTextChange}
          
        />
        <label htmlFor="avg_temperature_celsius">Avg Temperature (°C)</label>
        <input
          id="avg_temperature_celsius"
          type="number"
          value={planet.avg_temperature_celsius}
          onChange={handleTextChange}
          
        />
        <label htmlFor="planet_picture">Planet Picture</label>
        <input
          id="planet_picture"
          type="text"
          value={planet.planet_picture}
          placeholder="Link to Planet Picture"
          onChange={handleTextChange}
        />
        <label htmlFor="is_current_planet">Is Current Planet</label>
        <input
          id="is_current_planet"
          type="checkbox"
          checked={planet.is_current_planet}
          onChange={handleCheckboxChange}
        />
        <br />
        <input type="submit" className="submit-button" />
      </form>
      <Link to={`/planets/${index}`}>
        <button className="button">Go Back</button>
      </Link>
    </div>
  );
}

export default PlanetEditForm;
