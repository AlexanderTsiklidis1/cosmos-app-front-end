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
                    />
                    <span className="planet_name">{planet.planetname}</span>
                </div>
                <div className="card-body">
                    <p className="card-text">{planet.description}</p>
                    <p className="card-text">Diameter: {planet.diameter_km} km</p>
                </div>
            </div>
        </Link>
    );
}

export default Planet;
