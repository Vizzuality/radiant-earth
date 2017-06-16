import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeExampleItem from '../components/HomeExampleItem';
import illustration1 from '../images/home/illustration-1@2X.png';
import illustration2 from '../images/home/illustration-2@2X.png';
import illustration3 from '../images/home/illustration-3@2X.png';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="l-home">
          <div className="l-home__block l-home__summary">
            <div className="row align-center">
              <div className="small-12 medium-8 columns">
                <h1 className="text -ff2-xl -white"><span className="-underline">Earth Imagery for Impact</span></h1>
              </div>
              <div className="small-12 medium-8 columns">
                <div className="l-home__description text -ff1-m -white">Radiant Earth provides a geospatial and imagery technology platform that supports knowledge transfer to positively impact the developing world’s greatest social, economic and environmental challenges.</div>
              </div>
            </div>
          </div>
          <HomeExampleItem
            headboard="Radiant earth api"
            title="Integrate geospatial data with your applications"
            description="Providing the global community with the greatest collection of satellite data can help create powerful insights and evidence-based support for change."
            buttonText="Learn more"
            buttonUrl="#"
            img={illustration1}
          />

          <HomeExampleItem
            inverse={true}
            headboard="Radiant earth api"
            title="Search accross platforms to find imagery that fits your needs"
            description="Radiant.earth aims to simplify the overall process
of using satellite imagery."
            img={illustration2}
          />

          <HomeExampleItem
            headboard="Radiant earth api"
            title="Get alerts for new imagery"
            description="Set areas of interest to receive notifications as relevant
images are added, or trigger automatic analyses."
            img={illustration3}
          />
        </div>
        <Footer />
      </div>
    )
  };
}

export default Home;
