import React, { useEffect, useState } from "react";
import Planet from "./Planet";
const API = import.meta.env.VITE_BASE_URL;


function Planets() {
    const [planets, setPlanets] = useState([]);
    const [totalPosts, setTotalPlanets] = useState(0);
  
    useEffect(() => {
      fetch(`${API}/planets`) 
        .then((response) => response.json())
        .then((responseJSON) => {
          console.log(responseJSON)
          setPlanets(responseJSON.data.payload);
          setTotalPlanets(responseJSON.data.payload.length)
        })
        .catch((error) => console.log(error));
    }, []);

    return (

    )
}

export default Planets