
import React from 'react';
import './csss.css';

class PhotoEntry3 extends React.Component {

  render() {



   

    return <tr >
              <th>{this.props.cod}</th>
              <td>{this.props.item}</td>
              <td>{this.props.prezzo}</td>
           </tr>
  }

}

export default PhotoEntry3;
