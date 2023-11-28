import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

function PlanetDetails() {
    const [planet, setPlanet] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${API}/planets/${id}`)
            .then((response) => response.json())
            .then((fetchedPlanet) => {
                console.log(fetchedPlanet);
                setPlanet(fetchedPlanet);
            })
            .catch(() => navigate("/not-found"));
    }, [id, navigate]);

    const handleDelete = () => {
        const httpOptions = { method: "DELETE" };

        fetch(`${API}/planets/${id}`, httpOptions)
            .then((res) => {
                console.log(res);
                alert("Planet was deleted successfully!");
                navigate('/planets');
            })
            .catch((err) => console.error(err));
    };

    return (
        <article className="home-container">
            <h3 className="welcome-heading">
                {planet.planetname}
            </h3>
            <img className="app-planet_picture" src={planet.planet_picture ? planet.planet_picture : "src/assets/default_planet_pic.jpeg"} alt={`${planet.planetname} Planet`} />
            <h5 className="app-heading">
                Description: {planet.description}
            </h5>
            <p className="app-paragraph">
                Date of Discovery: {planet.date_of_discovery}
            </p>
            <p className="app-paragraph">
                Diameter: {planet.diameter_km} km
            </p>
            <p className="app-paragraph">
                Mass: {planet.mass_kg} kg
            </p>
            <p className="app-paragraph">
                Avg Temperature: {planet.avg_temperature_celsius} °C
            </p>
            <p className="app-paragraph">
                Is Current Planet: {planet.is_current_planet ? "Yes" : "No"}
            </p>
            <div className="showNavigation">
                <div>
                    {" "}
                    <Link to={`/planets`}>
                        <button className="button">Back</button>
                    </Link>
                </div>
                <div>
                    {" "}
                    <Link to={`/planets/${id}/edit`}>
                        <button className="button" style={{ padding: "10px" }}>Edit</button>
                    </Link>
                </div>
                <div>
                    {" "}
                    <button onClick={handleDelete} className="button" style={{ padding: "10px" }}>Delete</button>
                </div>
            </div>
        </article>
    );
}

export default PlanetDetails;
