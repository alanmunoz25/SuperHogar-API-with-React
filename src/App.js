import  React, { Component } from  'react';
import  Header  from  './components/Header';
import  Properties from './components/Properties';
import  SearchPhoto  from './components/SearchPhoto';

class App extends Component {
  render() {
    return(
      <div>
      <SearchPhoto></SearchPhoto>
      <header>
        <Header></Header>
      </header>

      <Properties></Properties>
      </div>
    );
  }

}

export default App;
