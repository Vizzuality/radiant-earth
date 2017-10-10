import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollEvent from 'react-onscroll';
import { Helmet } from 'react-helmet';
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
      interns: [],
      vacancies: [],
      loaderBoard: false,
      loaderStaff: false,
      loaderFellows: false,
      loaderInterns: false
    };

    this.getBoardDirectors = this.getBoardDirectors.bind(this);
    this.getStaff = this.getStaff.bind(this);
    this.getFellows = this.getFellows.bind(this);
    this.getInterns = this.getInterns.bind(this);
    this.getVacancies = this.getVacancies.bind(this);
  }

  componentDidMount() {
    this.getBoardDirectors();
    this.getStaff();
    this.getFellows();
    this.getInterns();
    this.getVacancies();
  }

  getBoardDirectors= () => {
    const self = this;
    fetch(`${API_BASE_URL}board_members`)
      .then(r => r.json())
      .then(data => self.setState({
        members: data,
        loaderBoard: data.length !== 0
      }));
  }

  getStaff= () => {
    const self = this;
    fetch(`${API_BASE_URL}/members?category=Staff`)
      .then(r => r.json())
      .then(data => self.setState({
        staff: data,
        loaderStaff: data.length !== 0
      }));
  }

  getFellows= () => {
    const self = this;
    fetch(`${API_BASE_URL}/members?category=Fellows`)
      .then(r => r.json())
      .then(data => self.setState({
        fellows: data,
        loaderFellows: data.length !== 0
      }));
  }

  getInterns= () => {
    const self = this;
    fetch(`${API_BASE_URL}/members?category=Interns`)
      .then(r => r.json())
      .then(data => self.setState({
        interns: data,
        loaderInterns: data.length !== 0
      }));
  }

  getVacancies() {
    const self = this;
    fetch(`${API_BASE_URL}/vacancies`)
      .then(r => r.json())
      .then(data => self.setState({
        vacancies: data,
      }));
  }

  handleScrollCallback() {
    if (window.scrollY > 120) {
      this.setState({
        sticky: true
      });
    } else {
      this.setState({
        sticky: false
      });
    }
  }

  render() {
    const { members, staff, fellows, interns, sticky, loaderBoard } = this.state;
    const { loaderFellows, loaderInterns, loaderStaff, vacancies } = this.state;
    const { pathname } = this.props.location;
    return (
      <div className="l-team">
        <Helmet>
          <title>Radiant.Earth | Our Team</title>
        </Helmet>
        <Header currentPath={pathname} />
        <ScrollEvent handleScrollCallback={() => this.handleScrollCallback()} />
        <div className={`l-team__board ${sticky ? '-sticky' : ''}`}>
          <div className="row">
            <h2
              className="text -ff2-xs -color-2 columns -uppercase large-12 medium-12 small-12"
            >Board of Directors</h2>
            {loaderBoard === false && <div className="row l-team__loader-container">
              <div className="columns c-box-loader -small large-3 medium-4 small-6">
                <div className="timeline-item">
                  <div className="animated-background -circle">{}</div>
                  <div className="animated-background -m">{}</div>
                  <div className="animated-background -m">{}</div>
                </div>
              </div>
              <div className="columns c-box-loader -small large-3 medium-4 small-6">
                <div className="timeline-item">
                  <div className="animated-background -circle">{}</div>
                  <div className="animated-background -m">{}</div>
                  <div className="animated-background -s">{}</div>
                </div>
              </div>
              <div className="columns c-box-loader -small large-3 medium-4 small-6">
                <div className="timeline-item">
                  <div className="animated-background -circle">{}</div>
                  <div className="animated-background ">{}</div>
                  <div className="animated-background -s">{}</div>
                </div>
              </div>
            </div>}
            { loaderBoard && <div className="flex">
              {members.map((item, i) =>
                (<div
                  key={i.toString()}
                  className="l-about__board-item columns large-3 medium-4 small-6"
                >
                  <div className="img" style={{ backgroundImage: `url(${API_ROOT}${item.image})` }}>{}</div>
                  <h3 className="text -ff2-l -color-1">{item.name}</h3>
                  <span className="text -ff2-xs -uppercase">{item.title}</span>
                </div>)
              )}
            </div>}

          </div>
        </div>
        <div className="l-team__content">
          <div className="row">
            <h2
              className="text -ff2-xs -color-2 columns -uppercase large-12 medium-12 small-12"
            >OUR TEAM</h2>

            {loaderStaff === false && <div className="l-team__loader-container -flex">
              <div className="c-box-loader -primary columns large-6 medium-12 small-12">
                <div className="timeline-item">
                  <div className="animated-background">{}</div>
                  <div className="animated-background -m">{}</div>
                  <div className="animated-background -s">{}</div>
                  <div className="animated-background">{}</div>
                  <div className="animated-background -m">{}</div>
                  <div className="animated-background">{}</div>
                  <div className="animated-background -footer">{}</div>
                </div>
              </div>
              <div className="c-box-loader -primary columns large-6 medium-12 small-12">
                <div className="timeline-item">
                  <div className="animated-background">{}</div>
                  <div className="animated-background -m">{}</div>
                  <div className="animated-background -s">{}</div>
                  <div className="animated-background">{}</div>
                  <div className="animated-background -m">{}</div>
                  <div className="animated-background">{}</div>
                  <div className="animated-background -footer">{}</div>
                </div>
              </div>
            </div> }

            {loaderStaff && <div className="flex">
              {staff.map((item, i) =>
                (<div className="columns large-6 medium-12 small-12" key={i.toString()}>
                  <div className="l-about__team-item">
                    <div className="contain-info">
                      <div className="img" style={{ backgroundImage: `url(${API_ROOT}${item.image})` }}>{}</div>
                      <div className="info">
                        <h3 className="text -ff2-l -color-1">{item.name}</h3>
                        <span className="text -ff2-xs -uppercase">{item.title}</span>
                      </div>
                    </div>
                    <div className="contain-text">
                      <p className="text -ff1-m">{item.description}</p>
                    </div>
                  </div>
                </div>)
              )}
            </div>}

          </div>
        </div>
        <div className="l-team__fellows">
          <div className="row">
            <h2
              className="text -ff2-xs -color-2 columns -uppercase large-12 medium-12 small-12"
            >Fellows</h2>
            {loaderFellows === false && <div className="row l-team__loader-container">
              <div className="columns c-box-loader -small large-3 medium-4 small-6">
                <div className="timeline-item">
                  <div className="animated-background -circle">{}</div>
                  <div className="animated-background -m">{}</div>
                  <div className="animated-background -m">{}</div>
                </div>
              </div>
              <div className="columns c-box-loader -small large-3 medium-4 small-6">
                <div className="timeline-item">
                  <div className="animated-background -circle">{}</div>
                  <div className="animated-background -m">{}</div>
                  <div className="animated-background -s">{}</div>
                </div>
              </div>
              <div className="columns c-box-loader -small large-3 medium-4 small-6">
                <div className="timeline-item">
                  <div className="animated-background -circle">{}</div>
                  <div className="animated-background ">{}</div>
                  <div className="animated-background -s">{}</div>
                </div>
              </div>
            </div>}
            {loaderFellows && <div className="flex">
              {fellows.map((item, i) =>
                (<div
                  key={i.toString()}
                  className="l-about__fellows-item columns large-3 medium-4 small-6"
                >
                  <div className="img" style={{ backgroundImage: `url(${API_ROOT}${item.image})` }}>{}</div>
                  <h3 className="text -ff2-l -color-1">{item.name}</h3>
                  <span className="text -ff2-xs -uppercase">{item.title}</span>
                </div>)
              )}
            </div>}
          </div>
        </div>
        <div className="l-team__interns">
          <div className="row">
            <h2
              className="text -ff2-xs -color-2 columns -uppercase large-12 medium-12 small-12"
            >Interns</h2>
            {loaderInterns === false && <div className="row l-team__loader-container">
              <div className="columns c-box-loader -small large-3 medium-4 small-6">
                <div className="timeline-item">
                  <div className="animated-background -circle">{}</div>
                  <div className="animated-background -m">{}</div>
                  <div className="animated-background -m">{}</div>
                </div>
              </div>
              <div className="columns c-box-loader -small large-3 medium-4 small-6">
                <div className="timeline-item">
                  <div className="animated-background -circle">{}</div>
                  <div className="animated-background -m">{}</div>
                  <div className="animated-background -s">{}</div>
                </div>
              </div>
            </div>}
            {loaderInterns && <div className="flex">
              {interns.map((item, i) =>
                (<div
                  key={i.toString()}
                  className="l-about__interns-item columns large-3 medium-4 small-6"
                >
                  <div className="img" style={{ backgroundImage: `url(${API_ROOT}${item.image})` }}>{}</div>
                  <h3 className="text -ff2-l -color-1">{item.name}</h3>
                  <span className="text -ff2-xs -uppercase">{item.title}</span>
                </div>)
              )}
            </div>}

          </div>
        </div>
        <div className="l-team__vacancies">
          <div className="row">
            <div className="small-12 medium-12 large-12 columns">
              <h4 className="text -ff2-xs -uppercase -color-2 row columns">Careers</h4>
              <ul>
                {vacancies.map((item, i) =>
                  <li key={i.toString()}><a className="text -color-1" href={item.url} target="_blank">{item.title}</a></li>
                )}
              </ul>
            </div>
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
