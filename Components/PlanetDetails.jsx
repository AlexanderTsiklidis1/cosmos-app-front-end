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
          
          <img className="app-profile_pic" src = {post.profile_pic ? post.profile_pic: "src/assets/default_profile_pic.jpeg"} />
          <h5 className="app-heading">
            Post Message: {post.postmessage}
          </h5>
          <img className="app-post_pic" src = {post.post_pic ? post.post_pic: "src/assets/default_post_pic.jpeg"} />
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
