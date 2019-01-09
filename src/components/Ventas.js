import React, { Component } from 'react';
import {
    PopupboxManager,
    PopupboxContainer
} from  'react-popupbox';
import  '../../node_modules/react-popupbox/dist/react-popupbox.css'
import  '../../node_modules/bulma/css/bulma.css';
import NumberFormat from 'react-number-format';
import  '../css/App.css';
import  '../css/roboto-fonts.css';
import  '../css/custom.css';

class  Ventas  extends  Component {
  constructor(){
      super();
      this.state  = {
          isOpen:  false,
          sections: [],
          current:  null,
          dataRoute:  "http://www.superhogar.net/wp-json/properties/v1/venta"
      }
  }
  get  scaledSections() {
    var  nbr  = (this.state.sections.length/3)
        .toString()
        .split('.');
    var  sections  = [];
    for (var  i  =  0; i  <  nbr[0]; i++) {
      sections[i] = [];
        for (var  j  =  1; j  <=  3; j++) {
          sections[i].push(this.state.sections[i*3  +  j  - 1]);
        }
    }
    if (nbr[1]) {
      var  missing  =  nbr[1].startsWith('3')
      ? 1
      : 2;
      sections.push([]);
      for(var  k =  0; k  <  missing; k++) {
        sections[sections.length  - 1].push(this.state.sections[nbr[0]*  3  +  k]);
      }
    }
    return  sections;
  }
  componentDidMount() {
    fetch(this.state.dataRoute)
       .then(response => response.json())
       .then(sections => this.setState((prevState, props) => {
         return { sections: sections.map(this.mapSection)};
       }));
  }
  mapSection(section) {
    return {
      img:  section.ID,
      src:  section.acf.imagenes,
      title:  section.acf.title,
      key:  section.post_title,
      description:  section.acf.descripcion,
      hab: section.acf.habitaciones,
      ban: section.acf.banos,
      par: section.acf.parqueos,
      tipo: section.acf.tipo_propiedad,
      precio: section.acf.precio,
      construccion: section.acf.construccion,
      sector: section.acf.sector,
      provincia: section.acf.provincia,
      desea: section.acf.desea,
      moneda: section.acf.moneda
    }
  }
  openPopupbox(section) {
    const content = (
      <div>
        <img  src={section.src}  alt=""/>
        <p>{section.title} - {section.description}</p>
        <p>{section.hab} {section.ban}</p>
      </div>)

    PopupboxManager.open({content})
  }
  render() {
    return (
      <div  className="App">
        <div>
        <div id="srp-list" className="srp-list">
            <div>
                <h2>Ventas</h2>
            </div>
            {this.scaledSections.map((level, i) =>
              <div className="columns" key={i}>
                {level.map((section, j) =>
                  <div className="column" key={j}>



<ul className="srp-list-marginless list-unstyled prop-list">
                      <li class="component_property-card js-component_property-card js-quick-view" data-url="http://www.superhogar.net/casa-cuesta-hermosa-ii-2/">

                          <div class="pre-card-wrap">
                              <div class="broker-info">
                                  <div class="ellipsis">
                                      <span>Cortesía de </span>
                                      <span data-label="property-broker">RE/MAX</span>
                                  </div>
                              </div>

                              <div class="label-wrap">
                                  <span class="label c_label label-green" data-label="property-label-new">
                                    {section.tipo}
                                  </span>
                              </div>
                          </div>

                          <div class="card-box js-navigate-to js-record-user-activity" data-url="http://www.superhogar.net/casa-cuesta-hermosa-ii-2/">

                              <div class="photo-wrap " data-label="property-photo">
                                      <img
                                        alt="{section.tipo} {section.sector} {section.provincia}"
                                        src={section.src}
                                        onClick={() => this.openPopupbox(this.state.sections[i*3+j])} />
                                        <div class="photo-wrap-detail-overlay"></div>
                              </div>

                              <div class="detail-wrap ">
                                  <div class="photo-overlay">
                                      <div class="property-type">{section.desea}</div>
                                      <div class="price" data-label="property-price">
                                          <span class="data-price">
                                            {section.moneda}<NumberFormat value={section.precio} displayType={'text'} thousandSeparator={true} />
                                          </span>

                                      </div>
                                  </div>

                                  <div class="photo-overlay-right">
                                  </div>

                                  <ul class="prop-meta ellipsis">
                                      <li data-label="property-meta-beds"><span class="data-value meta-beds">{section.hab}</span> Hab</li>
                                      <li data-label="property-meta-baths"><span class="data-value">{section.ban}</span> Ban</li>
                                      <li data-label="property-meta-sqft"><span class="data-value">{section.construccion}</span> mts</li>
                                      <li data-label="property-meta-lotsize"><span class="data-value"></span><span class="lot-label"> lot</span></li>
                                      <li data-label="property-meta-garage"><span class="data-value">{section.par}</span> Par</li>
                                  </ul>

                                  <div class="address ellipsis" data-label="property-address">
                                      <a href="/">
                                          <span class="listing-street-address">{section.sector}</span>,
                                          <span class="listing-city">{section.provincia}</span>,
                                      </a>
                                  </div>


                              </div>


                          </div>

                      </li>      </ul>
                  </div>
                )}
              </div>
            )}
      </div>  </div>
      <PopupboxContainer />
    </div>);
  }
}

export default Ventas;