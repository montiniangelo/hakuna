import React from 'react';
import PhotoEntry3 from './PhotoEntry3';
import entries from './photo-entries3';

class AlbumMaker3 extends React.Component {

  render() {

    

    return (

  <div className="content">
      <h3>Da mangiare</h3>
     <table className="table is-striped">
         <thead>
    <tr>
      <th><abbr title="Codice">Cod</abbr></th>
      <th>Item</th>
      <th><abbr title="Prezzo">Prezzo</abbr></th>
    </tr>
  </thead>
  <tfoot>
    <tr>
        <th><abbr title="Codice">Cod</abbr></th>
      <th>Item</th>
      <th><abbr title="Prezzo">Prezzo</abbr></th>
      </tr>
  </tfoot>
  <tbody>
   
        {
        entries.itemlist.map((photo) => {
          return <PhotoEntry3 cod={photo.cod} item={photo.item} prezzo={photo.prezzo} /> }
        )
        }
     </tbody>
      </table>
    
      </div>
    )

  }


}

export default AlbumMaker3;
