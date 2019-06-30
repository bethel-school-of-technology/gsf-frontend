import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePost, addLike, removeLike } from '../../actions/postActions';

class PostItem extends Component {
  onDeleteClick(id) {
    this.props.deletePost(id);
  }

  render() {
    const { post, auth, showActions } = this.props;
    return (
      <div className="card card-body mb-3">
        {post && <div className="row">
          <div className="col-md-2">
            <a href="profile.html">
              <img
                className="avatar-feed" src={require('../Img/avatar.jpg')}
                alt="Avatar"
              />
            </a>
            <br />
          </div>
          <p className="text-center">Author: {post.author}</p>
          <div className="col-md-10">
            <h1 className="lead">{post.title}</h1><hr />
            <p className="lead">{post.story}</p>
            {showActions ? (
              <span>
  
                <Link to={`/editpost/${post._id}`}>
                  <i className="fas fa-pencil-alt" 
                  style={{ 
                    cursor: 'pointer', 
                    float: 'left', 
                    color: 'white', 
                    marginRight: '1rem', 
                    marginTop: '1rem' 
                    }} />
                </Link>

                {post.user === auth.user.id ? (
                  <button onClick={this.onDeleteClick.bind(this, post._id)}
                    type="button"
                    className="btn btn-danger mr-1" 
                    style={{ 
                      background: '#980F06', 
                      float: 'right' 
                      }}>
                    <i className="fas fa-times" />
                  </button>


                ) : null}
              </span>
            ) : null}
          </div>
        </div>}
      </div>
    );
  }
}

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  post: PropTypes.shape({
    author: PropTypes.string,
    story: PropTypes.string,
    avatar: PropTypes.string,
  }),
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deletePost, addLike, removeLike })(
  PostItem
);



