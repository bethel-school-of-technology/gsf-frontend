import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import TextInputGroup from '../Layout/TextInputGroup';
import { getPost, updatePost } from '../../actions/postActions';

class EditPost extends Component {
  state = {
    story: '',
    title: '',
    author: '',
    errors: {}
  };

  componentWillReceiveProps(nextProps, nextState) {
    const { story, title, author } = nextProps.post;
    this.setState({
      story,
      title,
      author,

    });
  }


  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getPost(id);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { story, title, author } = this.state;
    const { id } = this.props.match.params;

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



    const updatePost = {
      story,
      title,
      author
    };

    this.props.updatePost(updatePost, id);

    //Clear State
    this.setState({
      story: '',
      title: '',
      author: '',
      errors: {}
    });

    this.props.history.push('/feed')
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });


  render() {
    const { story, title, author, errors } = this.state;

    return (

      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card" style={{ background: '#4267B2', color: 'white', textAlign: 'center', fontSize: '1.5em' }}>Edit Post</div>
          <div className="card-body">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <TextInputGroup
                    placeholder="Author"
                    type="author"
                    name="author"
                    value={author}
                    onChange={this.onChange}
                    error={errors.author}
                  />
                  <TextInputGroup
                    placeholder="Title"
                    type="title"
                    name="title"
                    value={title}
                    onChange={this.onChange}
                    error={errors.title}
                  />
                  <TextAreaFieldGroup
                    placeholder="Share A Testimony"
                    name="story"
                    value={story}
                    onChange={this.onChange}
                    error={errors.story}
                  />
                  <input type="submit" value="Update Post" className="btn btn-light btn-block" style={{ background: '#4267B2' }} /><br/>

                </div>
                    <p style={{color:"darkgrey"}}>Sorry!!! You cannot edit or delete your results just yet!</p>
                    <Link to="/feed" className="btn btn-lg btn-info mr-2" style={{background: '#EFEDE1', color: 'black'}}>
                  Back To Events
                </Link>
              </form>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

EditPost.propTypes = {
  post: PropTypes.object,
  getPost: PropTypes.func,
  auth: PropTypes.object
};

const mapStateToProps = state => ({
  post: state.post.post
});

export default connect(mapStateToProps, { getPost, updatePost })(EditPost);
