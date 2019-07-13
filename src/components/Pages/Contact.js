import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="landing">
          <div className="dark-overlay landing-inner text-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <div className="contact-header">
                    <h3 className="display-3 mb-4">The team behind GSF</h3>
                    <p className="lead"> Your Genesis Starts Here!</p>
                  </div>
                  </div>
                  <div className="grid-container">
                    <div className="col-md-6">
                      <h3>Cameron Schilling</h3>
                      {/* < img className="Cam" src={require('../Img/cam.jpg')} alt="Cam" /> */}
                      <p className="dev-info">
                        Location: Paducah, KY
                        <br />
                        Favorite Food: Yes
                        <br />
                        Whats next? - Bring people into their identity while allowing for God to be shown in creative avenues never before seen.
                      </p>
                      <a rel="noopener noreferrer"      href="https://www.linkedin.com/in/cameron-schilling-110094184"   target="_blank" >More about Cameron</a>

                    </div>
                    <div className="col-md-6">
                      <h3>Mandee Miller</h3>
                      {/* < img className="Mandee" src={require('../Img/mandee.jpg')} alt="Mandee" /> */}
                      <p className="dev-info">
                        Location: , OH
                        <br />
                        Favorite Food: 
                          <br />
                        Whats next? --.
                      </p>
                      <a rel="noopener noreferrer" href="https://www.linkedin.com/in/mandeemiller-35a99b185/" target="_blank">More about Mandee</a>
          
                    </div>
                    <br />
                    <div className="col-md-6">
                      <h3>Justin </h3>
                      {/* < img className="Justin" src={require('../Img/justin.jpg')} alt="Justin" /> */}
                      <p className="dev-info">
                        Location: , GA
                        <br />
                        Favorite Food: !
                          <br />
                        Whats next ? --.
                      </p>
                      <a href="https://www.linkedin.com/in/justin-shannon-9a7255174/" rel="noopener noreferrer"
                      target="_blank">More about Justin</a>
                      
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Contact;
