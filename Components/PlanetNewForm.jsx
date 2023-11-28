import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

function PlanetNewForm() {
    const [planet, setPlanet] = useState({
       
    });

  const navigate = useNavigate();

  const handleTextChange = (event) => {
    setPlanet({ ...planet, [event.target.id]: event.target.value });
  };

  const addPlanet = () => {
    const httpOptions = {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-type": "application/json",
      },
    };

    fetch(`${API}/planets`, httpOptions)
      .then((res) => {
        console.log(res);
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
      
      <Link to="/planets">
        <button className="button">Back to Planets</button>
      </Link>
    </div>
  );
}

export default PlanetNewForm;