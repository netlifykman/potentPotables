import React, { Component } from 'react';
import { Link } from 'react-router';

export default class About extends Component {
  render() {
    return (
      <div id="aboutContainer" className="animated fadeInUpBig">
        <div id="about">
          <h2 className="stack intro">
            Technology:
          </h2>
            <div id="stack" className="animated zoomIn">
              <img className="logo" id="react" src="http://50.112.42.29/tech_logos/react.png" height="65" width="65"/>
              <img className="logo" id="redux" src="http://50.112.42.29/tech_logos/redux.png" height="65" width="65"/>
              <img className="logo" id="webpack" src="http://50.112.42.29/tech_logos/webpack.png" height="65" width="65"/>
              <img className="logo" id="socket" src="http://50.112.42.29/tech_logos/socket.png" height="65" width="65"/>
              <img className="logo" id="node" src="http://50.112.42.29/tech_logos/nodejs.png" height="65" width="65"/>
              <img className="logo" id="express" src="http://50.112.42.29/tech_logos/express.png" height="55" width="205"/>
              <img className="logo" id="mongodb" src="http://50.112.42.29/tech_logos/mongodb.png" height="65" width="65"/>
              <img className="logo" id="chai" src="http://50.112.42.29/tech_logos/chai.png" height="65" width="65"/>
              <img className="logo" id="mocha" src="http://50.112.42.29/tech_logos/mocha.png" height="65" width="65"/>
              <img className="logo" id="phantomjs" src="http://50.112.42.29/tech_logos/phantomjs.png" height="65" width="65"/>
              <img className="logo" id="casperjs" src="http://50.112.42.29/tech_logos/casper.png" height="80" width="65"/>
              <img className="logo" id="aws" src="http://50.112.42.29/tech_logos/aws.png" height="65" width="125"/>
            </div>
          <div>
            <ul className="why">
              <li> We decided to build this app on React to help with the data mutation that our app goes through as React excels at rerendering the DOM upon any changes.</li>
              <li>Since a lot of our views depend heavily on our applications state, we decided to couple React with Redux, a very small library that implements the Flux architecture to our application. React lets you describe UI as a function of state, and Redux emits state updates in response to actions.</li>
              <li>Webpack is a very powerful build tool that bundles up all of our modules and generates it into a single bundled Javascript file. It also serves as a great debugging tool.</li>
              <li>Socket.IO is a JavaScript library for realtime web applications. It enables realtime, bi-directional communication between web clients and servers.</li>
              <li>Our back-end was built on top of node.js and express.js because of its non-blocking and event-driven I/O.</li>
              <li>MongoDB was used to create and store our game sessions. The unique link code provided by each session is in part generated by MongoDB.</li>
              <li>The unit and integration tests were written with Chai. To implement an end-to-end test, we used CasperJS. Both of these tools ared guided by the testing apparatus, Mocha.</li>
              <li>An industry standard, we deployed with AWS as it provided us with a scalable, reliable and secure global infrastructure.</li>
            </ul>
          </div>
          <div className="developerContainer">
            <h2 className="developers">
              The Developers:
            </h2>
            <h3 className="clickDevelopers animated infinite flash">
            (click us for more info)
            </h3>
            <div className="parent">
              <div className="peter">
                <Link to="peter">
                  <img id="peter" src="http://50.112.42.29/assets/peter.jpg" />
                  <div className="developerText">
                    Peter Dinh
                  </div>
                </Link>
              </div>
              <div className="lukas">
              <Link to="lukas">
                <img id="lukas" src="http://50.112.42.29/assets/lukas.png" />
                  <div className="developerText">
                    Lukas Stuart-Fry
                </div>
              </Link>
              </div>
              <div className="chris">
              <Link to="chris">
                <img id="chris" src="http://50.112.42.29/assets/chris.jpg" />
                  <div className="developerText">
                    Chris Loncarich
                </div>
              </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
    );
  }
}
