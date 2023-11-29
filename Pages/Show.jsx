import React from 'react';
import PlanetDetails from '../Components/PlanetDetails';


function Show() {
  return (
    <div className="show-container">
      <h2 className="show-title">Everything About Your Selected Celestial Object</h2>
      <PlanetDetails />
    </div>
  );
}

export default Show;