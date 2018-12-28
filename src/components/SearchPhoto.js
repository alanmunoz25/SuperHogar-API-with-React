
import React, { Component } from 'react';
import PhotoList from './PhotoList';

class SearchPhoto extends Component {

  constructor() {
    super();
    this.state = {
      results: [],
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'piantini') => {
		// fetch(`http://www.superhogar.net/wp-json/props/v1/search?s=${query}&client_id=${client_id}`)
    fetch('http://www.superhogar.net/wp-json/props/v1/search?s=piantini')
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          results: responseData.data,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {

    return (
      <div className = "App">
        <SearchPhoto onSearch = {this.performSearch} />
        <div>
          {
            (this.state.loading) ? <p>Loading</p> :<PhotoList results={this.state.results} />
          }
        </div>
      </div>
    );
  }
}

export default SearchPhoto;
