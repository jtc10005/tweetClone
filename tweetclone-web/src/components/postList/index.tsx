import React, { Component } from 'react';
import Post from '../../models/post'

interface Props {
  posts: Post[],
//   onTodoClicked: (todoId: number) => void
}
interface State { }

export default class PostList extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const { posts } = this.props
    return (
      <ul>
        {
          posts.map(post => (
            <li key={post.postId}
            //   onClick={() => onTodoClicked(todo.id)}
            //   style={{ textDecoration: `${todo.done ? 'line-through' : ''}`, cursor: 'pointer' }}
              >
              {post.postText}
            </li>)
          )
        }
      </ul>
    )
  }
}