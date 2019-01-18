import React, { Component } from 'react';
import { FormEvent } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

interface Props {
  handleSubmit: (value: string) => void;
}
interface State {
  value: string;
}

export default class AddPostForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { value: '' }; // Value is empty by default
    this._updateValue = this._updateValue.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _updateValue(value: string) {
    this.setState({ value });
  }

  _handleSubmit(e: FormEvent<any>) {
    e.preventDefault();
    if (!this.state.value.trim()) {
      return;
    }

    this.props.handleSubmit(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    const { value } = this.state;
    const { _updateValue, _handleSubmit } = this;
    return (
      <form onSubmit={_handleSubmit}>
        <TextField
          id="standard-name"
          label="postText"
          value={value}
          onChange={e => _updateValue(e.target.value)}
          margin="normal"
          multiline={true}
          rows={2}
          rowsMax={4}
        />
        <Button variant="outlined" color="primary" type="submit">
          Submit
        </Button>
      </form>
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
