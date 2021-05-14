import React from 'react';
import PhotoEntry2 from './PhotoEntry2';
import entries from './photo-entries2';

class AlbumMaker2 extends React.Component {

  render() {

    

    return (

  <div className="content">
      <h3>Bar</h3>
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
          return <PhotoEntry2 cod={photo.cod} item={photo.item} prezzo={photo.prezzo} /> }
        )
        }
     </tbody>
      </table>
    
      </div>
    )

  }


}

export default AlbumMaker2;
