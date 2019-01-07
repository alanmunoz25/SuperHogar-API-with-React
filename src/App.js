import  React, { Component } from  'react';
import  Header  from  './components/Header';
import  Properties from './components/Properties';

class App extends Component {
  render() {
    return(
      <div>
      <header>
        <Header></Header>
      </header>

      <Properties></Properties>
      </div>
    );
  }

}

export default App;
