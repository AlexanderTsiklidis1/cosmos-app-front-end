import React from 'react';


function Home() {
  return (
    <div className="home-container">
      <h2 className="welcome-header">Welcome</h2>
      <h3 className="subtitle">To the COSMOS App!</h3>
      <p className="description">Using our COSMOS App, you will be able to:</p>
      <ul className="feature-list">
        <ul className="feature-item">Create a Planet to update our database with information on a new planet -- Subject to Review</ul>
        <ul className="feature-item">See all of the Planets in our database and obtain information on those planets</ul>
        <ul className="feature-item">Edit an Existing Planet</ul>
        <ul className="feature-item">Go ahead and click on the planets section to view our database of planets; or on New to create a new planet for our database(subject to review) </ul>
      </ul>
      <p className="description">We do hope you enjoy our COSMOS app, and please tell your friends and spread the word!</p>
    </div>
  );
}

export default Home;