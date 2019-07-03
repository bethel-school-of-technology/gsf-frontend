import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import TextInputGroup from '../Layout/TextInputGroup';
import { addPost } from '../../actions/postActions';
import CharacterCounter from 'react-character-counter'

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      story: '',
      title: '',
      author: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const {story, title, author } = this.state;
    
    // Check For Errors
    if (title === '') {
      this.setState({ errors: { title: 'title is required' } });
      return;
    }

    if (story === '') {
      this.setState({ errors: { story: 'story is required' } });
      return;
    }

    if (author === '') {
      this.setState({ errors: { author: 'author is required' } });
      return;
    }


    const newPost = {
      story: this.state.story,
      title: this.state.title,
      author: this.state.author,
      
    };

    this.props.addPost(newPost);
    this.setState({
      story: '',
      title: '',
      author: ''
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

   handleChange(event) {
     this.setState({
       length: event.target.value.length
     });
   }

  render() {
    const { errors } = this.state;

    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className='card' style={{background: '#12519D', opacity: .7, color: 'white', textAlign: 'center', fontSize: '1.5em'}}>Fitness Testimony</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
             
                <TextInputGroup
                  label="Author"
                  placeholder="Author"
                  type="author"
                  name="author"
                  value={this.state.author}
                  onChange={this.onChange}
                  error={errors.author}
                />

                <TextInputGroup
                  label="Title"
                  placeholder="Title"
                  type="title"
                  name="title"
                  value={this.state.title}
                  onChange={this.onChange}
                  error={errors.title}
                />
                <TextAreaFieldGroup
                  label="Share a Testimony"
                  placeholder="Share a Testimony"
                  name="story"
                  value={this.state.story}
                  onChange={this.onChange}
                  error={errors.story}
                  maxLength={3000}
                />
              <div className="counter">
                <CharacterCounter 
                value={this.state.story} 
                maxLength={4000}
                >
                </CharacterCounter><br/>
              </div>
              <p 
                className="max-count" 
                style={{color: "darkgrey"}}
                >Max Characters:</p>
              </div>


              <button type="submit" className="btn btn-dark" style={{background: '#5C5D5F', color: 'white'}}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  maxLength: PropTypes.number
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { addPost })(PostForm);
