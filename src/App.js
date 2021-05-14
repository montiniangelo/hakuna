
import Banner from './components/banner';
import AlbumMaker from './components/AlbumMaker';
import AlbumMaker2 from './components/AlbumMaker2';
import AlbumMaker3 from './components/AlbumMaker3';

import Footer from './components/footer';

import './App.css';

function App() {
  return (
    <div>
      <header>
        <Banner />
        
          <div className="columns is-mobile">
  <div className="column is-half is-offset-one-quarter"><h1 className="title is-1 centro">Menù</h1></div>
</div>
          
        
    
      </header>
      <div className="container">
  <div className="notification is-halfheight">
  <AlbumMaker />
  </div>
  <div className="notification is-halfheight">
  <AlbumMaker2 />
  </div>
  <div className="notification is-halfheight">
  <AlbumMaker3 />
  </div>
  
    </div>
   
<Footer />
 </div>
  );
}

export default App;
