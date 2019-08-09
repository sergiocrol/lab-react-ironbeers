import axios from 'axios';

class BeerService {
  constructor() {
    this.beer = axios.create({
      baseURL: 'https://ih-beer-api.herokuapp.com/beers/'
    })
  }

  getAllBeers() {
    return this.beer.get()
      .then(response => response)
  }

  getBeer(id) {
    return this.beer.get(`/${id}`)
      .then(response => response)
  }

  getRandomBeer() {
    return this.beer.get('/random')
      .then(response => response)
  }

  newBeer(beer) {
    return this.beer.post('/new', beer)
      .then(response => response)
  }

}
const beerService = new BeerService();

export default beerService;