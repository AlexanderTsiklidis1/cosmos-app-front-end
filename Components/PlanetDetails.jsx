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
            console.log(fetchedPlanet)
          setPost(fetchedPlanet);
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
        <article className="home-container">
          
          
          <div className="showNavigation">
            <div>
              {" "}
              <Link to={`/planets`}>
                <button className="button">Back</button>
              </Link>
            </div>
            <div>
              {" "}
              <Link to={`/planets/${index}/edit`}>
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
export default PlanetDetails