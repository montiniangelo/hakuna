import React from 'react';
import PhotoEntry from './PhotoEntry';
import entries from './photo-entries';

class AlbumMaker extends React.Component {

  render() {

    

    return (

  <div className="content fade-in">
    <h3>Aperitivo</h3>
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
          return <PhotoEntry cod={photo.cod} item={photo.item} prezzo={photo.prezzo} /> }
        )
        }
     </tbody>
      </table>
    
      </div>
    )

  }


}

export default AlbumMaker;
