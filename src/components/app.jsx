import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Toolbar from './toolbar';

class App extends React.Component {
  render() {
    return  <MuiThemeProvider>
                  <Toolbar />
                </MuiThemeProvider>
  }
}

export default App;