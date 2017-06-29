import React, { Component } from 'react';
import ReactSortable from 'react-sortablejs';


class Dashboard extends Component {

  constructor (props) {
    super(props);

    this.state = {
      count: 1,
    };

    this.content = [
      {
        tag: 'NEW FEATURES',
        title: 'Laying Tiles Without Grout and Mortar',
        image: 1
      },
      {
        tag: 'NEWS',
        title: 'Expanding Access to Earth Observation Data',
        image: 2
      },
      {
        tag: 'TUTORIALS, NEWS',
        title: 'Atomate analyses when updated imagery is available',
        image: 3
      },
      {
        tag: 'TUTORIALS',
        title: 'How to integrate the Radiant Earth API with your application',
        image: 4
      },
      {
        tag: 'NEW FEATURES,TUTORIALS',
        title: 'Ingest your own data',
        image: 5
      },
      {
        tag: 'NEW FEATURES',
        title: 'Laying Tiles Without Grout and Mortar',
        image: 1
      },
      {
        tag: 'NEWS',
        title: 'Expanding Access to Earth Observation Data',
        image: 2
      },
      {
        tag: 'TUTORIALS, NEWS',
        title: 'Atomate analyses when updated imagery is available',
        image: 3
      },
      {
        tag: 'TUTORIALS',
        title: 'How to integrate the Radiant Earth API with your application',
        image: 4
      },
      {
        tag: 'NEW FEATURES,TUTORIALS',
        title: 'Ingest your own data',
        image: 5
      }
    ];
  }

  render() {
    return (
      <div className="l-dashboard align-center">
        <div className="l-dashboard__panel">
          <h1 className="text -ff2-xl">Dashboard.</h1>
          <ReactSortable
              tag="div"
              className="l-dashboard__container-drag-drop row"
          >
            <div className="small-4 medium-4 large-4 column">
              <div className="l-dashboard__item-drag-drop l-dashboard__item-add">
                <div className="icon-plus">
                  <svg className="icon icon-logo"><use xlinkHref="#icon-plus"></use></svg>
                </div>
                <span className="text -ff2-s -uppercase">Add new blog</span>
              </div>
            </div>
            {this.content.map((item, i) =>
              <div className="small-4 medium-4 large-4 column">
                <div key={i} className="l-dashboard__item-drag-drop">
                  <span className="l-dashboard__order text -ff2-xs">{i + 1}</span>
                  <h2 className="text -ff2-xm">{item.title}</h2>
                  <p className="tags text -ff2-xs -color-2 -uppercase">{item.tag}</p>
                </div>
              </div>
            )}
          </ReactSortable>

        </div>
      </div>
    )
  };
}

export default Dashboard;
