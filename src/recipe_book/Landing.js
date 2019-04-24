import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <body>
      <header className="header">
        <div className="header--text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Recipies</span>
            <span className="heading-primary--sub">Your new recipie book</span>
          </h1>
          <Link to="/list" className="u-center-text">
            <button className="button button--white button--animated">Create your recipie book</button>
          </Link>
        </div>
      </header>
    </body>
  );
}

export default Landing;