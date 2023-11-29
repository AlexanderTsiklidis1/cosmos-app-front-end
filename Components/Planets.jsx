import React, { useEffect, useState } from "react";
import Planet from "./Planet";
const API = import.meta.env.VITE_BASE_URL;


function Planets() {
    const [planets, setPlanets] = useState([]);
    const [totalPlanets, setTotalPlanets] = useState(0);
  
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
      <div className="home-container">
      <h1 className="totalObjects">Total Celestial Objects in Database: {totalPlanets}</h1>
        <section>
            {planets.map((planet) => {
                return <Planet key={planet.id} planet={planet} />
            })}
        </section>
    </div>
    )
}

export default Planets