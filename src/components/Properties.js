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

class  Properties  extends  Component {
  constructor(props){
      super(props);
      this.state  = {
          isOpen:  false,
          sections: [],
          current:  null,
          dataRoute:  ""
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
    fetch(this.props.dataRoute)
       .then(res => res.json())
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

            {this.scaledSections.map((level, i) =>
              <div className="columns" key={i}>
                {level.map((section, j) =>
                  <div className="column" key={j}>



<ul className="srp-list-marginless list-unstyled prop-list">
                      <li className="component_property-card js-component_property-card js-quick-view" data-url="http://www.superhogar.net/casa-cuesta-hermosa-ii-2/">

                          <div className="pre-card-wrap">
                              <div className="broker-info">
                                  <div className="ellipsis">
                                      <span>Cortesía de </span>
                                      <span data-label="property-broker">RE/MAX</span>
                                  </div>
                              </div>

                              <div className="label-wrap">
                                  <span className="label c_label label-green" data-label="property-label-new">
                                    {section.tipo}
                                  </span>
                              </div>
                          </div>

                          <div className="card-box js-navigate-to js-record-user-activity" data-url="http://www.superhogar.net/casa-cuesta-hermosa-ii-2/">

                              <div className="photo-wrap " data-label="property-photo">
                                      <img
                                        alt="{section.tipo} {section.sector} {section.provincia}"
                                        src={section.src}
                                        onClick={() => this.openPopupbox(this.state.sections[i*3+j])} />
                                        <div className="photo-wrap-detail-overlay"></div>
                              </div>

                              <div className="detail-wrap ">
                                  <div className="photo-overlay">
                                      <div className="property-type">{section.desea}</div>
                                      <div className="price" data-label="property-price">
                                          <span className="data-price">
                                            {section.moneda}<NumberFormat value={section.precio} displayType={'text'} thousandSeparator={true} />
                                          </span>

                                      </div>
                                  </div>

                                  <div className="photo-overlay-right">
                                  </div>

                                  <ul className="prop-meta ellipsis">
                                      <li data-label="property-meta-beds"><span className="data-value meta-beds">{section.hab}</span> Hab</li>
                                      <li data-label="property-meta-baths"><span className="data-value">{section.ban}</span> Ban</li>
                                      <li data-label="property-meta-sqft"><span className="data-value">{section.construccion}</span> mts</li>
                                      <li data-label="property-meta-lotsize"><span className="data-value"></span><span className="lot-label"> lot</span></li>
                                      <li data-label="property-meta-garage"><span className="data-value">{section.par}</span> Par</li>
                                  </ul>

                                  <div className="address ellipsis" data-label="property-address">
                                      <a href="/">
                                          <span className="listing-street-address">{section.sector}</span>,
                                          <span className="listing-city">{section.provincia}</span>,
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

export default Properties;