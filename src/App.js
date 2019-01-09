import  React, { Component } from  'react';
import  Header  from  './components/Header';
import  Properties from './components/Properties';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      loadedComponents: [],
      components: [],
    };
  }
  addView = async viewName => {
    // Don't load more than once.
    if (this.state.loadedComponents.includes(viewName)) return;

    console.log(`Loading ${viewName} view...`);

    import(`./components/${viewName}.js`)
      .then(Component => {

        this.setState({
          
          loadedComponents:[].concat(viewName),
          components: [].concat(
            <Component.default
              key="1"
              data={this.props.data}
            />
          )

        });
      })
      .catch(error => {
        this.setState({
          loadedComponents: this.state.loadedComponents.concat(viewName),
          components: this.state.components.concat(
            <Properties></Properties>
          )
        });
      });
  };
  handleShowAlquileres = async event => {
    await this.addView("Alquileres");
  };
  
  handleShowVentas = async event => {
    await this.addView("Ventas");
  };
  
  render() {
    const { components } = this.state;

    return(
      <div>
      <header>
        <Header></Header>
      </header>
      <div className="buttons">
          <div>
            <button id="table" onClick={this.handleShowAlquileres}>Alquileres</button>
          </div>
          <div>
            <button id="graph" onClick={this.handleShowVentas}>Ventas</button>
          </div>
        </div>
        <div className="views">
          {components.length === 0 ? (
            <Properties></Properties>
          ) : (components)}
        </div>
      
      </div>
    );
  }

}

export default App;
