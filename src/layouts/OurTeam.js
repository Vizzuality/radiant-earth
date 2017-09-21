import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { API_BASE_URL, API_ROOT } from '../global';

class OurTeam extends Component {
  constructor(props) {
    super(props);

    this.state = {
      members: [],
      staff: [],
      fellows: [],
      interns: []
    };

    this.getBoardDirectors = this.getBoardDirectors.bind(this);
    this.getStaff = this.getStaff.bind(this);
    this.getFellows = this.getFellows.bind(this);
    this.getInterns = this.getInterns.bind(this);
  }

  componentDidMount() {
    this.getBoardDirectors();
    this.getStaff();
    this.getFellows();
    this.getInterns();
  }

  getBoardDirectors= () => {
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

  getFellows= () => {
    const self = this;
    fetch(`${API_BASE_URL}/members?category=Fellows`)
      .then(r => r.json())
      .then(data => self.setState({ fellows: data }));
  }

  getInterns= () => {
    const self = this;
    fetch(`${API_BASE_URL}/members?category=Interns`)
      .then(r => r.json())
      .then(data => self.setState({ interns: data }));
  }

  render() {
    const { members, staff, fellows, interns } = this.state;
    const { pathname } = this.props.location;
    return (
      <div className="l-team">
        <Header currentPath={pathname} />
        <div className="l-team__board">
          <div className="row">
            <h2
              className="text -ff2-xs -color-2 columns -uppercase large-12 medium-12 small-12"
            >Board of Directors</h2>
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
        <div className="l-team__content">
          <div className="row">
            <h2
              className="text -ff2-xs -color-2 columns -uppercase large-12 medium-12 small-12"
            >STAFF</h2>
            {staff.map((item, i) =>
              (<div className="columns large-6 medium-12 small-12" key={i.toString()}>
                <div className="l-about__team-item">
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
        <div className="l-team__fellows">
          <div className="row">
            <h2
              className="text -ff2-xs -color-2 columns -uppercase large-12 medium-12 small-12"
            >Fellows</h2>
            {fellows.map((item, i) =>
              (<div
                key={i.toString()}
                className="l-about__fellows-item columns large-3 medium-4 small-6"
              >
                <div className="img" style={{ backgroundImage: `url(${API_ROOT}${item.image})` }}>{}</div>
                <span className="text -ff2-xs -uppercase">{item.title}</span>
                <h3 className="text -ff2-l -color-1">{item.name}</h3>
              </div>)
            )}
          </div>
        </div>
        <div className="l-team__interns">
          <div className="row">
            <h2
              className="text -ff2-xs -color-2 columns -uppercase large-12 medium-12 small-12"
            >Interns</h2>
            {interns.map((item, i) =>
              (<div
                key={i.toString()}
                className="l-about__interns-item columns large-3 medium-4 small-6"
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

OurTeam.propTypes = {
  location: PropTypes.object.isRequired,
};

export default OurTeam;
