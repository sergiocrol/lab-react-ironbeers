import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import HomeButton from '../components/HomeButton';
import beerService from '../services/beerService';
import Card from '../components/Card';
import SearchInput from '../components/SearchInput';

class ListBeer extends Component {
  state = {
    beers: [],
    value: ''
  }

  componentDidMount() {
    beerService.getAllBeers()
      .then(response => {
        const beersFromAPI = response.data;
        this.setState({
          beers: beersFromAPI
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  filterBeers = (value) => {
    this.setState({
      value: value
    })
  }

  render() {
    return (
      <div>
        <HomeButton props={this.props} />
        <h1>List of beers</h1>
        <SearchInput filterBeers={this.filterBeers} />
        {
          this.state.beers.length > 0 ? this.state.beers.map(beer => {
            if (beer.name.includes(this.state.value)) {
              return (
                <Link className="link" to={`/beers/${beer._id}`} key={beer._id}>
                  <Card beer={beer} />
                </Link>
              )
            } else {
              return null
            }
          }) : <p>Loading...</p>
        }
      </div >
    )
  }
}

export default ListBeer
