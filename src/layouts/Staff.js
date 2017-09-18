import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { API_BASE_URL, API_ROOT } from '../global';

import anne from '../images/team/bios_anne.jpg';
import dan from '../images/team/bios_dan.jpg';
import anthony from '../images/team/bios_anthony.jpg';

import peter from '../images/team/bios_peter.png';
import sanjay from '../images/team/bios_sanjay.png';
import margie from '../images/team/bios_margie.png';

class Staff extends Component {
  constructor(props) {
    super(props);

    this.state = {
      members: [],
      staff: [],
    };

    this.getBoard = this.getBoard.bind(this);
    this.getStaff = this.getStaff.bind(this);

    this.staffContent = [
      {
        img: anne,
        position: 'CEO, Radiant.Earth',
        name: 'Anne Hale Miglarese',
        text: 'Anne Hale Miglarese, founding CEO of Radiant, is committed to providing geospatial analytics using imagery and mapping data to empower informed decision-making to help solve the developing world’s greatest social, economic and environmental challenges. Read more',
      },
      {
        img: dan,
        position: 'Chief Technology Officer',
        name: 'Dan Lopez',
        text: 'Dan Lopez is an innovative entrepreneur and architect who has advised a wide variety of web-centric businesses and brands by lending his creative, strategic and technological vision. Read more',
      },
      {
        img: anthony,
        position: '...',
        name: 'Anthony Burn',
        text: 'Anthony Burn is passionate about harnessing the full power of GIS enabled data across multiple platforms, to transform individual lives and whole societies for the better. Read more',
      },
    ];

    this.boardContent = [
      {
        img: anne,
        position: 'CEO, Radiant.Earth',
        name: 'Anne Hale Miglarese',
      },
      {
        img: peter,
        position: 'Venture Partner, Omidyar Network',
        name: 'Peter Rabley',
      },
      {
        img: sanjay,
        position: 'CEO, Geospatial Media & Communications',
        name: 'Sanjay Kumar',
      },
      {
        img: margie,
        position: 'CEO, Sullivan Strategy',
        name: 'Margie Sullivan',
      },
    ];
  }

  componentDidMount() {
    this.getBoard();
    this.getStaff();
  }

  getBoard= () => {
    const self = this;
    fetch(`${API_BASE_URL}/members?is_board_member=true`)
      .then(r => r.json())
      .then(data => self.setState({ members: data }));
  }

  getStaff= () => {
    const self = this;
    fetch(`${API_BASE_URL}/members?category=Staff`)
      .then(r => r.json())
      .then(data => self.setState({ staff: data }));
  }

  render() {
    const { members, staff } = this.state;
    return (
      <div className="l-staff">
        <Header />
        <div className="l-staff__content">
          <div className="row">
            <h2
              className="text -ff2-xs -color-2 columns -uppercase large-12 medium-12 small-12"
            >STAFF</h2>
            {staff.map((item, i) =>
              (<div className="columns large-6 medium-12 small-12" key={i.toString()}>
                <div className="l-about__staff-item">
                  <div className="contain-info">
                    <div className="img" style={{ backgroundImage: `url(${API_ROOT}${item.image})` }}>{}</div>
                    <div className="info">
                      <span className="text -ff2-xs -uppercase">{item.title}</span>
                      <h3 className="text -ff2-l -color-1">{item.name}</h3>
                    </div>
                  </div>
                  <div className="contain-text">
                    <p className="text -ff1-m">{item.description}</p>
                  </div>
                </div>
              </div>)
            )}
          </div>
        </div>
        <div className="l-staff__board">
          <div className="row">
            <h2
              className="text -ff2-xs -color-2 columns -uppercase large-12 medium-12 small-12"
            >BOARD</h2>
            {members.map((item, i) =>
              (<div
                key={i.toString()}
                className="l-about__board-item columns large-3 medium-4 small-6"
              >
                <div className="img" style={{ backgroundImage: `url(${API_ROOT}${item.image})` }}>{}</div>
                <span className="text -ff2-xs -uppercase">{item.title}</span>
                <h3 className="text -ff2-l -color-1">{item.name}</h3>
              </div>)
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Staff;
