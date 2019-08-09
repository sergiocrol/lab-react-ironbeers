import React, { Component } from 'react'
import beerService from '../services/beerService';
import HomeButton from '../components/HomeButton';
import BeerDetailCard from '../components/BeerDetailCard';

class SingleBeer extends Component {

  state = {
    beer: null
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    beerService.getBeer(id)
      .then(response => {
        this.setState({
          beer: response.data
        })
      })
  }

  render() {
    const { beer } = this.state;
    return (
      <div>
        <HomeButton props={this.props} />
        <section className="single-beer">
          {
            beer ? (
              <BeerDetailCard beer={beer} />
            ) : <p>Loading</p>
          }
        </section>
      </div >
    )
  }
}

export default SingleBeer;
