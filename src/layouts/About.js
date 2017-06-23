import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import annePic from '../images/team/bios_anne.jpg';
import danPic from '../images/team/bios_dan.jpg';
import anthonyPic from '../images/team/bios_anthony.jpg';
import louisaPic from '../images/team/bios_louisa.jpg';

class About extends Component {
  render() {
    return (
      <div>
        <Header />
          <div className="row l-about">
            <div className="small-6 columns l-about__header">
              <h1 className="text -ff2-xl -white">
                <span className="-underline">About</span>
              </h1>
              <p className="text -ff1-m -white">
                Radiant launched operations in August 2016 to answer the call for open access to geospatial data,
                with analytical tools for global development practitioners designed to
                improve decision-making, and to foster entrepreneurship worldwide.
              </p>
            </div>
            <div className="small-12 columns l-about__types-container">
              <div className="row align-justify small-up-1 medium-up-3 large-up-3">
                <div className="small-4 columns l-about__types-item">
                  <h2 className="text -ff2-l -white">Enterprise</h2>
                  <p className="text -ff1-m -white">
                    Radiant Earth is the organization of choice for governments, NGOs, companies, developers,
                    and entrepreneurs to build open source ecosystems that accelerate
                    the use of earth imagery technology, and commercial adoption.
                  </p>
                </div>
                <div className="small-4 columns l-about__types-item">
                  <h2 className="text -ff2-l -white">Developers</h2>
                  <p className="text -ff1-m -white">
                    Petabytes of Earth imagery all in one place which is comprised of the world’s open satellite,
                    aerial, and drone imagery archives. Access it all easily with open web standards,
                    and find, combine and analyze earth imagery at any scale, and share it on the web.
                  </p>
                </div>
                <div className="small-4 columns l-about__types-item">
                  <h2 className="text -ff2-l -white">Technical Working Groups</h2>
                  <p className="text -ff1-m -white">
                    Working to solve some of the world’s toughest social, humanitarian and environmental challenges
                    using earth observation data? Are you working on your own open source geospatial or imagery
                    project? If so, please get in touch at code@radiant.earth.
                  </p>
                </div>
              </div>
            </div>
            <div className="small-12 columns l-about__team-container">
              <div className="row align-justify small-up-1 medium-up-2 large-up-4">
                <div className="small-3 columns l-about__team-item ">
                  <img className="l-about__person-picture" src={annePic} alt="Anne Hale Miglarese"></img>
                  <span className="l-about__person-position text -ff2-xs -color-2 -uppercase">Chief Executive Officer</span>
                  <h2 className="text -ff2-l -white">Anne Hale Miglarese</h2>
                  <p className="text -ff1-m -white l-about__description">
                    Anne Hale Miglarese, founding CEO of Radiant, is committed to providing geospatial analytics using
                    imagery and mapping data to empower informed decision-making to help solve the developing
                    world’s greatest social, economic and environmental challenges.
                  </p>
                </div>

                <div className="small-3 columns l-about__team-item ">
                  <img className="l-about__person-picture" src={danPic} alt="Dan Lopez"></img>
                  <span className="l-about__person-position text -ff2-xs -color-2 -uppercase">Chief Technology Officer</span>
                  <h2 className="text -ff2-l -white">Dan Lopez</h2>
                  <p className="text -ff1-m -white l-about__description">
                    Dan Lopez is an innovative entrepreneur and architect who
                    has advised a wide variety of web-centric businesses and
                    brands by lending his creative, strategic and technological vision.
                  </p>
                </div>

                <div className="small-3 columns l-about__team-item ">
                  <img className="l-about__person-picture" src={anthonyPic} alt="Anthony Burn"></img>
                  <span className="l-about__person-position text -ff2-xs -color-2 -uppercase">Director - Community Engagement</span>
                  <h2 className="text -ff2-l -white">Anthony Burn</h2>
                  <p className="text -ff1-m -white l-about__description">
                    Anthony Burn is passionate about harnessing the full power of GIS
                    enabled data across multiple platforms, to transform individual
                    lives and whole societies for the better.
                  </p>
                </div>

                <div className="small-3 columns l-about__team-item ">
                  <img className="l-about__person-picture" src={louisaPic} alt="Louisa Nakanuku-Diggs"></img>
                  <span className="l-about__person-position text -ff2-xs -color-2 -uppercase">Marketing and Communications Associate</span>
                  <h2 className="text -ff2-l -white">Louisa Nakanuku-Diggs</h2>
                  <p className="text -ff1-m -white l-about__description">
                    Louisa Nakanuku-Diggs is passionate about storytelling and visualization and their
                    possibilities to transform complex topics into simple, yet engaging and effective narratives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        <Footer />
      </div>
    )
  };
}

export default About;
