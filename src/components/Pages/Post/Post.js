import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import PostItem from '../Posts/PostItem'
import CommentForm from './CommentForm'
import CommentFeed from './CommentFeed'
import Spinner from '../../common/spinner/Spinner'
import { getPost } from '../../../redux/actions/postActions'
import classnames from 'classnames'
import styles from './Post.module.css'

class Post extends Component {
  componentDidMount () {
    if (this.props.match.params.id) {
      this.props.getPost(this.props.match.params.id)
    }
  }

  render () {
    const { post, loading } = this.props.post
    let postContent

    if (post === null || loading || Object.keys(post).length === 0) {
      postContent = <Spinner />
    } else {
      postContent = (
        <div className={styles.post_main}>
          <PostItem post={post.content} showActions={false} />{' '}
          <CommentForm postId={post._id} />{' '}
          <CommentFeed postId={post._id} comments={post.comments} />{' '}
        </div>
      )
    }

    return (
      <div className={styles.post}>
        <button className={classnames('btn', styles.btn_back)}>
          <Link to='/feeds'> Back To Feed </Link>{' '}
        </button>{' '}
        {postContent}{' '}
      </div>
    )
  }
}

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  post: state.post
})

export default connect(mapStateToProps, {
  getPost
})(Post)
