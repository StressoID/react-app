import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import Menu from 'material-ui/svg-icons/navigation/menu';
import NavigationClose from 'material-ui/svg-icons/navigation/close';import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class Login extends React.Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} label="Login" />
    );
  }
}

class  Logged extends React.Component {

  style = {
    color: 'white'
  }

  render() {
    return  <IconMenu   
                  iconStyle={this.style}
                  iconButtonElement={ <IconButton><Menu /></IconButton> } >
                  <MenuItem primaryText="Refresh" />
                  <MenuItem primaryText="Help" />
                  <MenuItem primaryText="Sign out" />
                </IconMenu>
  }
}

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class Toolbar extends React.Component {
  render() {
    return (
      <div>
        <AppBar
          title="Title"
          iconElementLeft={<Logged />}
          iconElementRight={<Login />}
        />
      </div>
    );
  }
}

export default Toolbar;