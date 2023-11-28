import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

function PostEditForm() {
    const {index} = useParams();
    const [planet, setPlanet] = useState({
        username: "",
        postMessage: "",
        post_pic: "",
        profile_pic: ""
    });
    const navigate = useNavigate();
    
    const handleTextChange = (event) => {
        setPlanet({ ...planet, [event.target.id]: event.target.value });
    };

    // const handleCheckboxChange = () => {
    //     setPost({ ...post, });
    //   };

    useEffect(() => {
        fetch(`${API}/planets/${index}`)
          .then((response) => response.json())
          .then((fetchedPlanet) => {
            setPlanet(fetchedPlanet);
          })
          .catch(() => navigate("/not-found"));
      }, [index, navigate]);

      const updatePost = () => {
        const httpOptions = {
          method: "PUT",
          body: JSON.stringify(post),
          headers: {
            "Content-type": "application/json",
          },
        };
    
        fetch(`${API}/planets/${index}`, httpOptions)
          .then(() => {
            alert(`The planet ${planet.planetname} has been updated!`);
            navigate(`/planets/${index}`);
          })
          .catch((err) => console.error(err));
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        updatePost();
      };

      return (
        <div className="Edit">
          <form onSubmit={handleSubmit}>
           
          </form>
          <Link to={`/planets/${index}`}>
            <button className="button">Go Back</button>
          </Link>
        </div>
      );
    }
    
export default PostEditForm;