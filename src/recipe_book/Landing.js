import React from 'react';

const Landing = () => {
  return (
    <body>
      <header className="header">
        <div className="header-text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">Recipies</span>
            <span className="heading-primary-sub">Your new recipie book</span>
          </h1>
          <button className="button">See your book</button>
        </div>
      </header>
    </body>
  );
}

export default Landing;