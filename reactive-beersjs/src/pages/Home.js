import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <Link className="link" to="/beers">
        <section>
          <div className="beers"></div>
          <h3>All Beers</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ex earum deleniti ad iusto aperiam dolor blanditiis error at, consectetur iste praesentium aspernatur, commodi eius in deserunt corrupti molestias illo.</p>
        </section>
      </Link>
      <Link className="link" to="/random-beer">
        <section>
          <div className="random-beer"></div>
          <h3>Random Beer</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ex earum deleniti ad iusto aperiam dolor blanditiis error at, consectetur iste praesentium aspernatur, commodi eius in deserunt corrupti molestias illo.</p>
        </section>
      </Link>
      <Link className="link" to="/new-beer">
        <section>
          <div className="new-beer"></div>
          <h3>New Beer</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ex earum deleniti ad iusto aperiam dolor blanditiis error at, consectetur iste praesentium aspernatur, commodi eius in deserunt corrupti molestias illo.</p>
        </section>
      </Link>
    </div>
  )
}

export default Home
