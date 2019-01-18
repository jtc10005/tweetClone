import { connect } from 'react-redux'
import { addPost } from '../actions/post'
import AddPostForm from '../components/newPost/addPostForm'

export default connect<any, any, any>(null, {
  handleSubmit: addPost
})(AddPostForm)