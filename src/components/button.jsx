export default class Button extends React.Component {

  clickHandler() {
    alert('Click OK');
  }

  render() {
    return <button
      onClick={this.clickHandler}
      style={
      {width: '100px', height: '30px', border: '1px solid red'}
      }>
      Click Me
    </button>
  }
}