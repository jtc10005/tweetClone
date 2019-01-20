import { connect } from 'react-redux';
import { State } from '../reducers';
import { getPosts } from '../selector';
// import { toggleTodo } from '../actions/todos'
import PostList from '../components/postList';

const mapStateToProps = (state: State) => ({
  posts: getPosts(state)
});

// const mapDispatchToProps = {
//   onTodoClicked: undefined //toggleTodo
// }

export default connect<any, any, any, any>(mapStateToProps)(PostList);
