import React, { Component } from 'react';
import { Col, Row } from 'react-materialize';

class User extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col s={6} className='profile-text'>
                        <div className='card blue-grey darken-1'>
                            <div className='card-content white-text'>
                                <span className='card-title'>welcome user</span>
                                <p>a profile picture coming soon!</p>
                            </div>
                        </div>

                    </Col>
                    <Col s={6} className='profile-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi u</p>
                    </Col>

                </Row>


            </div>
        )
    }
}


export default User;