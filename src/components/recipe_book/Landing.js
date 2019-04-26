import React from 'react';
import { Link } from 'react-router-dom';
import FoodImage1 from '../../sass/img/food1.jpg';
import FoodImage2 from '../../sass/img/food2.jpg';
import FoodImage3 from '../../sass/img/food3.jpg';

const Landing = () => {
  return (
    <div className="outer-border">
      <header className="header">
        <div className="header--text-box">
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