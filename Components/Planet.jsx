import React from "react";
import { Link } from "react-router-dom";

function Planet({ planet }) {
    return (
        <Link to={`/planets/${planet.id}`}>
            <div className="card">
                <div className="card-header">
                    <img
                        className="planet_picture"
                        src={planet.planet_picture || "src/assets/default_planet_pic.jpeg"}
                        alt={`${planet.planetname} Planet`}
                    />
                    <span className="planet_name">{planet.planetname}</span>
                </div>
                <div className="card-body">
                    <p className="card-text">{planet.description}</p>
                    <p className="card-text">Discovered: {planet.date_of_discovery}</p>
                    <p className="card-text">Diameter: {planet.diameter_km} km</p>
                    <p className="card-text">Mass: {planet.mass_kg} kg</p>
                    <p className="card-text">Avg Temperature: {planet.avg_temperature_celsius} °C</p>
                    <p className="card-text">Is Current Planet: {planet.is_current_planet ? "Yes" : "No"}</p>
                </div>
            </div>
        </Link>
    );
}

export default Planet;
