import React, { Component } from 'react';

class  SearchBox extends Component{
        handleChange()  {
            this.props.onUserInput(this.refs.filterTextInput.value);
        }

        render() {
            return (
                <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type in someone"
                      value={this.props.filterText}
                      refs="filterTextInput"
                      onChange={this.handleChange}/>
                </div>
            );
        }
    }

    class FilterableProfileTable extends Component{
        getInitialState() {
            return {
              filterText: '',
              show: true
            };
        }

        handleUserInput(filterText) {
            this.setState({
              filterText: filterText,
              show: false
            });
        }
        render() {
          let selectedProduct = this.props.products.find(product => product.name === this.state.filterText);
          return this.state.show
                   ? (
                      <div>
                          <SearchBox filterText={this.state.filterText} onUserInput={this.handleUserInput}/>
                          <h4>hello</h4>
                      </div>
                      )
                  : (
                      <div>
                        <SearchBox filterText={this.state.filterText} onUserInput={this.handleUserInput}/>
                        <div>{selectedProduct && selectedProduct.name}</div>
                        <div>{selectedProduct && selectedProduct.stock}</div>
                        <div>{selectedProduct && selectedProduct.price}</div>
                        <div>{selectedProduct && selectedProduct.category}</div>
                      </div>
                    )
        }
    }

    class SearchPage extends Component {
        render() {
            return (
                <div className="searchpage-container">
                    <div className="search-header">
                    </div>
                    <div className="col-md-12 searchpage-searchbar-container">
                        <div className="col-md-5">
                            <FilterableProfileTable products={PRODUCTS}/>
                        </div>
                        <div className="col-md-2 middle-logo">
                        </div>
                        <div className="col-md-5">
                            <FilterableProfileTable products={PRODUCTS}/>
                        </div>
                    </div>
                    <div className="searchpage-homepage-combo">
                    </div>
                </div>
            );
        }
    }

    var PRODUCTS = [
      {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
      {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
      {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
      {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
      {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
      {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
    ];

export default SearchBox;
