import  React, { Component } from  'react';
import  Header  from  './components/Header';
import  Properties from './components/Properties';
import  SearchBox  from './components/SearchBox';

class App extends Component {
  render() {
    return(
      <div>
      <SearchBox></SearchBox>
      <header>
        <Header></Header>
      </header>

      <Properties></Properties>
      </div>
    );
  }

}

export default App;
