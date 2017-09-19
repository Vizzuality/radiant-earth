import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { API_BASE_URL, API_ROOT } from '../global';

class Staff extends Component {
  constructor(props) {
    super(props);

    this.state = {
      members: [],
      staff: [],
    };

    this.getBoard = this.getBoard.bind(this);
    this.getStaff = this.getStaff.bind(this);
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
    const { pathname } = this.props.location;
    return (
      <div className="l-staff">
        <Header currentPath={pathname} />
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

Staff.propTypes = {
  location: PropTypes.string.isRequired,
};

export default Staff;
