import React, { Component } from 'react';
import { FormEvent } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Post from '../../models/post';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const PaperStyle = {
  height: '40%',
  width: '33%',
  marginLeft: '33vw',
  marginTop: '2em'
};

const textAreaStyle = {
  width: '95%'
};

const cancelBtnStyle = {
  marginRight: '20em',
  marginBottom: '1em'
};

const btnStyle = {
  marginBottom: '1em'
};

interface Props {
  handleSubmit: (value: Post) => void;
}
interface State {
  value: Post;
}

export default class AddPostForm extends Component<Props, State> {
  newPost: Post;
  maxLength: number = 120;
  remainingLength: number = 120;
  constructor(props: Props) {
    super(props);
    this.newPost = this._newPost();
    this.state = { value: this.newPost }; // Value is empty by default
    this._updateValue = this._updateValue.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._cancelPost = this._cancelPost.bind(this);
  }

  _newPost(): Post {
    return { postText: '', postId: '', createdDate: new Date() };
  }

  calcCurrentLength() {
    this.remainingLength = this.maxLength - this.state.value.postText.length;
  }

  _updateValue(postText: string) {
    if (this.remainingLength >= 1) {
      this.newPost.postText = postText;
      this.setState({ value: this.newPost });
      this.calcCurrentLength();
    }
  }

  _cancelPost() {
    this.setState({ value: this._newPost() });
    this.remainingLength = 120;
  }

  _handleSubmit(e: FormEvent<any>) {
    e.preventDefault();
    if (!this.state.value.postText.trim()) {
      return;
    }

    this.props.handleSubmit(this.state.value);
    this.setState({ value: this._newPost() });
  }

  render() {
    const { value } = this.state;
    const { _updateValue, _handleSubmit, _cancelPost, remainingLength } = this;

    return (
      <Paper style={PaperStyle}>
        <form onSubmit={_handleSubmit}>
          <TextField
            style={textAreaStyle}
            id="standard-name"
            label="Post Message..."
            value={value.postText}
            onChange={e => _updateValue(e.target.value)}
            margin="normal"
            multiline={true}
            rows={2}
            rowsMax={4}
          />
          <br />
          <Typography>{remainingLength} Characters Left</Typography>
          <Button
            variant="contained"
            color="secondary"
            style={cancelBtnStyle}
            onClick={_cancelPost}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={btnStyle}
          >
            Submit
          </Button>
        </form>
      </Paper>
    );
  }
}
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { State } from '../../reducers';
// import { addPost } from '../../actions/post';
// // import firebase from '../../firestore';
// import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import { withStyles, StyleRulesCallback } from '@material-ui/core/styles';
// import PropTypes from 'prop-types';

// const styles: StyleRulesCallback = theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap'
//   },
//   textField: {
//     marginLeft: theme.spacing.unit,
//     marginRight: theme.spacing.unit,
//     width: 200
//     // height: 200
//   },
//   dense: {
//     marginTop: 19
//   },
//   menu: {
//     width: 200
//   }
// });

// class NewPost extends Component<{}, { postText: string }> {
//   db: any;

//   static propTypes = {
//     classes: PropTypes.object.isRequired
//   };

//   constructor(props: any) {
//     super(props);
//     this.state = { postText: '' };

//     // this.db = firebase.firestore();
//     // this.db.settings({
//     //   timestampsInSnapshots: true
//     // });
//   }

//   componentDidMount() {}

//   handleChange = (event: any) => {
//     this.setState({
//       postText: event.target.value
//     });
//   };

//   addPost = (e: any) => {
//     e.preventDefault();

//     // this.db.collection('users').add({
//     //   nameFirst: this.state.nameFirst,
//     //   nameLast: this.state.nameLast,
//     //   email: this.state.email
//     // });

//     // this.setState({
//     //   nameFirst: '',
//     //   nameLast: '',
//     //   email: ''
//     // });
//     // this.getUsers();
//   };

//   render() {
//     const { classes } = this.props as any;
//     return (
//       <div>
//         <form
//           onSubmit={this.addPost}
//           className={classes.container}
//           autoComplete="off"
//         >
//           <TextField
//             id="standard-name"
//             label="postText"
//             className={classes.textField}
//             value={this.state.postText}
//             onChange={this.handleChange}
//             margin="normal"
//             multiline={true}
//             rows={2}
//             rowsMax={4}
//           />
//           <Button variant="outlined" color="primary" type="submit">
//             Submit
//           </Button>
//         </form>
//       </div>
//     );
//   }
// }
// // export default NewPost;
// // NewPost.propTypes = {
// //   classes: PropTypes.object.isRequired,
// // };

// export default withStyles(styles)(NewPost);
