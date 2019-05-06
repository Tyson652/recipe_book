import React from 'react';
import { Link } from 'react-router-dom';
import FoodImage1 from '../../sass/img/food1.jpg';
import FoodImage2 from '../../sass/img/food2.jpg';
import FoodImage3 from '../../sass/img/food3.jpg';
import LogoImage from '../../sass/img/logo-white.png';

const Landing = () => {
  return (
    <div className="outer-border">
      <header className="header">
        <div className="header__logo-box">
          <Link to='/list'>
            <img src={LogoImage} alt="logo" className="header__logo" />
          </Link>
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Recipies</span>
            <span className="heading-primary--sub">Your new recipie book</span>
          </h1>
          <Link to="/new" className="u-center-text">
            <button className="button button--white button--animated">Create your recipie book</button>
          </Link>
        </div>
      </header>

      <main>
        <section className="section-about">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">Quickly look up amazing recipies in an instant</h2>
          </div>

          <div className="row">
            <div className="col-1-of-2">
              <h3 className="heading-tertiary u-margin-bottom-small">An awsome way to store my favourite recipies</h3>
              <p className="p paragraph">Lorem ipsum dolor sit amet, expedita rerum, est nostrum assumenda ipsam veritatis facilis atque voluptate consequuntur nam perferendis quidem. Necessitatibus distinctio doloremque, aliquam similique reiciendis pariatur</p>

              <h3 className="heading-tertiary u-margin-bottom-small">Everything i need to know to make beautiful dishes</h3>
              <p className="p paragraph">Lorem ipsum dolor sit drfisic facilis atque voluptate consequuntur nam perferendis quidem. Necessitatibus distinctio doloremque, aliquam similique reiciendis pariatur</p>

              <Link to="#" className="btn-text">Learn more &rarr;</Link>
            </div>

            <div className="col-1-of-2">
              <div className="composition">
                <img src={FoodImage1} alt="Food 1" className="composition__photo composition__photo--p1" />
                <img src={FoodImage2} alt="Food 2" className="composition__photo composition__photo--p2" />
                <img src={FoodImage3} alt="Food 3" className="composition__photo composition__photo--p3" />
              </div>
            </div>
          </div>
        </section>
    
        <section className="section-features">
          <div className="row">
            <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-world"></i>
                  <h3 className="heading-tertiary u-margin-bottom-small">Culture food</h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet, expedita rerum, est nostrum assumenda ipsam veritatis facilis atque voluptate consequuntur
                  </p>
                </div>
            </div>
            <div className="col-1-of-4">
            <div className="feature-box">
                  <i className="feature-box__icon icon-basic-compass"></i>
                  <h3 className="heading-tertiary u-margin-bottom-small">Find new recipes</h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet, expedita rerum, est nostrum assumenda ipsam veritatis facilis atque voluptate consequuntur
                  </p>
                </div>
            </div>
            <div className="col-1-of-4">
            <div className="feature-box">
                  <i className="feature-box__icon icon-basic-map"></i>
                  <h3 className="heading-tertiary u-margin-bottom-small">Track your calories</h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet, expedita rerum, est nostrum assumenda ipsam veritatis facilis atque voluptate consequuntur
                  </p>
                </div>
            </div>
            <div className="col-1-of-4">
            <div className="feature-box">
                  <i className="feature-box__icon icon-basic-heart"></i>
                  <h3 className="heading-tertiary u-margin-bottom-small">Live a healthier life</h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet, expedita rerum, est nostrum assumenda ipsam veritatis facilis atque voluptate consequuntur
                  </p>
                </div>
            </div>
          </div>
        </section>

        <section className="section-tours">
          <div className="u-center-text u-margin-top-medium u-margin-bottom-big">
            <h2 className="heading-secondary">Choose your version</h2>
          </div>

          <div className="row">
            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--1">
                    &nbsp;
                  </div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--1">Basic Version</span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>Save your recipes</li>
                      <li>Track calories</li>
                      <li>Search recipes</li>
                      <li>Save favourites</li>
                      <li>Quick Login</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-1">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">$297</p>
                    </div>
                    <button id="card__button" className="button button--white">Book now!</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--2">
                    &nbsp;
                  </div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--2">Mid <br/> Version</span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>Save your recipes</li>
                      <li>Track calories</li>
                      <li>Search recipes</li>
                      <li>Save favourites</li>
                      <li>Quick Login</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-2">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">$397</p>
                    </div>
                    <button id="card__button" className="button button--white">Book now!</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--3">
                    &nbsp;
                  </div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--3">Pro <br/> Version</span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>Save your recipes</li>
                      <li>Track calories</li>
                      <li>Search recipes</li>
                      <li>Save favourites</li>
                      <li>Quick Login</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-3">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">$497</p>
                    </div>
                    <button id="card__button" className="button button--white">Book now!</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="u-center-text">
            <div id="card__button-2" className="button button--blue u-margin-top-small">Discover all versions</div>
          </div>
        </section>
      </main>

      {/* <section className="grid-test">
        <div class="row">
            <div className="col-1-of-2">
              Col 1 of 2
            </div>
            <div className="col-1-of-2">
            Col 1 of 2
            </div>
        </div>

        <div class="row">
            <div class="col-1-of-3">
                Col 1 of 3
            </div>
            <div class="col-1-of-3">
                Col 1 of 3
            </div>
            <div class="col-1-of-3">
                Col 1 of 3
            </div>
        </div>

        <div class="row">
            <div class="col-1-of-3">
                Col 1 of 3
            </div>
            <div class="col-2-of-3">
                Col 2 of 3
            </div>
        </div>

        <div class="row">
            <div class="col-1-of-4">
                Col 1 of 4
            </div>
            <div class="col-1-of-4">
                Col 1 of 4
            </div>
            <div class="col-1-of-4">
                Col 1 of 4
            </div>
            <div class="col-1-of-4">
                Col 1 of 4
            </div>
        </div>

        <div class="row">
            <div class="col-1-of-4">
                Col 1 of 4
            </div>
            <div class="col-1-of-4">
                Col 1 of 4
            </div>
            <div class="col-2-of-4">
                Col 2 of 4
            </div>
        </div>

        <div class="row">
            <div class="col-1-of-4">
                Col 1 of 4
            </div>
            <div class="col-3-of-4">
                Col 3 of 4
            </div>
        </div>
      </section> */}
    </div>
  );
}

export default Landing;