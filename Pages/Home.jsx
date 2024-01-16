import React from 'react';


function Home() {
  return (
    
    <div className="home-container">
      <h2 className="welcome-header">Welcome to the COSMOS App!</h2>
      <p className="description">Using our COSMOS App, you will be able to:</p>
      <ul className="feature-list">
        <li className="feature-item">1 - Create a celestial object to update our database with information on a new celestial object -- Subject to Admin Review</li>
        <li className="feature-item">2 - See all of the celestial objectes in our database and obtain information on those celestial objects</li>
        <li className="feature-item">3 - Edit an existing celestial object</li>
        <li className="feature-item">4 - Delete an existing celestial object</li>
        <li className="feature-item">5 - Go ahead and click on the "Celestial Objects" section to view our database of the Cosmos; or on "New Celestial Object", to create a new celestial object for our database -- Subject to Admin Review </li>
      </ul>
      <p className="description">We hope you enjoy our COSMOS app, and please tell your friends and spread the word!</p>
    </div>
  );
}

export default Home;