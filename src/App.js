import  React, { Component } from  'react';
import  Header  from  './components/Header';
import  Properties from './components/Properties';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {

    return(
      <div>
      <header>
        <Header></Header>
      </header>
          <Properties dataRoute="http://www.superhogar.net/wp-json/properties/v1/post"></Properties>
      </div>
    );
  }

}

export default App;
