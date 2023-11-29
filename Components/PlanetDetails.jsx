import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

function PlanetDetails() {
    const [planet, setPlanet] = useState({});
    const { index } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${API}/planets/${index}`)
            .then((response) => response.json())
            .then((fetchedPlanet) => {
                console.log(fetchedPlanet);
                setPlanet(fetchedPlanet);
            })
            .catch(() => navigate("/not-found"));
    }, [index, navigate]);

    const handleDelete = () => {
        const httpOptions = { method: "DELETE" };

        fetch(`${API}/planets/${index}`, httpOptions)
            .then((res) => {
                console.log(res);
                alert("Planet was deleted successfully!");
                navigate('/planets');
            })
            .catch((err) => console.error(err));
    };

    return (
        <article className="planet-details-container">
            <h3 className="planet-details-title">
                {planet.planetname}
            </h3>
            <img className="planet-details-image" src={planet.planet_picture ? planet.planet_picture : "src/assets/default_planet_pic.jpeg"} alt={`${planet.planetname} Planet`} />
            <h5 className="planet-details-heading">
                Description: {planet.description}
            </h5>
            <p className="planet-details-text">
                Diameter: {planet.diameter_km} km
            </p>
            <p className="planet-details-text">
                Mass: {planet.mass_kg} kg
            </p>
            <p className="planet-details-text">
                Avg Temperature: {planet.avg_temperature_celsius} °C
            </p>
            <p className="planet-details-text">
                Is Current Planet: {planet.is_current_planet ? "Yes" : "No"}
            </p>
            <div className="planet-details-navigation">
                <div>
                    {" "}
                    <Link to={`/planets`}>
                        <button className="planet-details-button">Back</button>
                    </Link>
                </div>
                <div>
                    {" "}
                    <Link to={`/planets/${index}/edit`}>
                        <button className="planet-details-button" style={{ padding: "10px" }}>Edit</button>
                    </Link>
                </div>
                <div>
                    {" "}
                    <button onClick={handleDelete} className="planet-details-button" style={{ padding: "10px" }}>Delete</button>
                </div>
            </div>
        </article>
    );
}

export default PlanetDetails;
