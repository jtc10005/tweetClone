import React, { Component } from 'react';
// import firebase from '../../firestore';
import Button from '@material-ui/core/Button';

class NewPost extends Component {
  db: any;
  constructor() {
    super({});
    this.state = {
      email: '',
      nameFirst: '',
      nameLast: '',
      Users: []
    };
    // this.db = firebase.firestore();
    // this.db.settings({
    //   timestampsInSnapshots: true
    // });
  }

  componentDidMount() {
    // this.getUsers();
  }

//   getUsers = () => {
//     this.db
//       .collection('users')
//       .get()
//       .then(doc => {
//         var usrs = doc.docs.map(d => {
//           var user = d.data();
//           user.Id = d.id;
//           user.Deleted = d.deletedDate ? true : false;
//           return user;
//         });
//         // .filter(d => !d.deletedDate);
//         this.setState({ Users: usrs });
//       });
//   };

//   updateInput = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };

//   addUser = e => {
//     e.preventDefault();

//     this.db.collection('users').add({
//       nameFirst: this.state.nameFirst,
//       nameLast: this.state.nameLast,
//       email: this.state.email
//     });

//     this.setState({
//       nameFirst: '',
//       nameLast: '',
//       email: ''
//     });
//     this.getUsers();
//   };

//   removeUser = e => {
//     // e.preventDefault();
//     console.log(e);
//     this.db
//       .collection('users')
//       .doc(e.Id)
//       .update({ deletedDate: new Date() });
//     // deletedDate;
//     this.getUsers();
//   };

  render() {
    // this.users = this.state.Users.map((item, key) => (
    //   <li key={item.email}>
    //     {item.email} - {item.Id}
    //     <Button color="primary" onClick={() => this.removeUser(item)}>
    //       Delete
    //     </Button>
    //   </li>
    // ));
    return (
      <div>NewPost
        {/* <form onSubmit={this.addUser}>
          <input
            type="text"
            name="nameFirst"
            onChange={this.updateInput}
            placeholder="First name"
          />
          <input
            type="text"
            name="nameLast"
            onChange={this.updateInput}
            placeholder="Last name"
          />
          <input
            type="email"
            name="email"
            onChange={this.updateInput}
            placeholder="email"
          />
          <Button variant="outlined" color="primary" type="submit">
            Submit
          </Button>
        </form>
        <ul>{this.users}</ul> */}
      </div>
    );
  }
}
export default NewPost;
