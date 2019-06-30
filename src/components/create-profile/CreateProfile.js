import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { createInfo } from '../../actions/profileActions';

class CreateProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            location: '',
            bio: '',
            errors: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const profileData = {
            name: this.state.name,
            location: this.state.location,
            bio: this.state.bio
        };

        this.props.createProfile(profileData, this.props.history);
        //createInfo
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div className='create-profile'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8 m-auto'>
                            <h1 className='display-4 text-center'>Create Your Profile</h1>
                            <p className='lead text-center'>
                                Some info about yourself
                            </p>
                            <small className='d-block pb-3'>* = required fields</small>
                            <form onSubmit={this.onSubmit}>
                                <TextFieldGroup
                                    placeholder='Name'
                                    name='name'
                                    value={this.state.handle}
                                    onChange={this.onChange}
                                    // error={errors.handle}
                                    info='Name'
                                />
                                <TextFieldGroup
                                    placeholder='Location'
                                    name='location'
                                    value={this.state.location}
                                    onChange={this.onChange}
                                    // error={errors.location}
                                    info='Location'
                                />
                                <TextAreaFieldGroup
                                    placeholder='Short Bio'
                                    name='bio'
                                    value={this.state.bio}
                                    onChange={this.onChange}
                                    // error={errors.bio}
                                    info='Tell us a little about yourself!'
                                />
                                <input type='submit' value='Submit' className='btn btn-info btn-block mt-4' />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

CreateProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors

})

export default connect(mapStateToProps, { createInfo })(withRouter(CreateProfile));