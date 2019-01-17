import React, { Component } from 'react';
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class NavBar extends Component<any> {
  nextPath(path: string) {
    return () => {
      this.props.history.push(path);
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              T. Clone
            </Typography>
            <Button color="inherit" onClick={this.nextPath('/')}>
              Login
            </Button>
            <NavLink color="inherit"  to="/ViewPosts">
              View Posts
            </NavLink>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
// export default NavBar;
// function NavBar(props: any) {
//   const { classes } = props;
//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             className={classes.menuButton}
//             color="inherit"
//             aria-label="Menu"
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" color="inherit" className={classes.grow}>
//             T. Clone
//           </Typography>
//           <Button color="inherit" onClick={}>Login</Button>
//           <NavLink activeClassName="active" to="/ViewPosts">
//             View Posts
//           </NavLink>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }

// NavBar.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default withStyles(styles)(NavBar);
