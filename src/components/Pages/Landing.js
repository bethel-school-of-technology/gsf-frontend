import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class Landing extends Component {
  render() {
    return (
      <div>
        <div className="landing">
          <div className="landingBG">
            <div className="dark-overlay landing-inner text-light">
        
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
              <div className="landing-header">
                <h3 className="display-3 mb-4" style={{color: '#EFEDE1'}}>Welcome To Genesis</h3>
                <p className="lead" style={{color: '#EFEDE1'}}>
                  Sign-up to see future events and training information!
                </p>
                <hr />
                <Link to="/signup" className="btn btn-lg btn-info mr-2" style={{background: '#EFEDE1', color: 'black'}}>
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-light" style={{background: '#EFEDE1', color: 'black'}}>
                  Login
                </Link>
              </div>            
              </div>

        <div className="carousel-container">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">

              <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
              </ol>


              <div className="carousel-inner">
            <div className="item active">
              <img src={require('../Img/bulletproofgood.jpg')} alt="Bulletproof" style={{ height: "100%"}}/>
                < div className = "carousel-caption" >
              {/* <h5>Marty Grubbs-Bulltetproof Fitness</h5> */}
                  <p>
                  </p>
                </div>
            </div>

           <div className="item">
              <img src={require('../Img/cleanslate.jpg')} alt="CleanSlate" style={{ height: "100%"}}/>
                <div className="carousel-caption">
                  {/* <h5>Marissa Oliver-Clean Slate Fitness</h5> */}
                    <p>
                    </p><br/>
                </div>
            </div>
    
            <div className="item">
              <img src={require('../Img/noranation.jpg')} alt="NoraNation" style={{ height: "100%"}}/>
                  <div className="carousel-caption">
                          {/* <h5>Nora Hendrix-NoraNation</h5> */}
                          <p>
                          </p>
                      </div>
                    </div>
                  </div>

                  <div className="item">
              {/* <img src={require('../Img/jake.jpg')} alt="Jake" style={{ width: "100%"}}/> */}
                  <div className="carousel-caption">
                          <p>
                          </p>
                      </div>
                    </div>
                  </div>



              <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  
     
    
    )
  }
}


export default Landing;