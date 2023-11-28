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