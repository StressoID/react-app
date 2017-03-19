export default class Table extends React.Component {

  constructor() {
    super();
    this.classname = 'table-app';
  }

  render() {
    return (
      <div>
        <table className={this.classname}>
          <tbody>
            <tr>
              <td>1</td>
            </tr>
            <tr>
              <td>2</td>
            </tr>
            <tr>
              <td>3</td>
            </tr>
            <tr>
              <td>4</td>
            </tr>
          </tbody>
        </table>
      </div>
    ) ;
  }
}
