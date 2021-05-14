import React from 'react';
import SlideEntry from './SlideEntry';
import entries from './slide-entries';
import './csss.css';


function Banner (){

	return (


<section className="hero is-medium color-change-4x">

  <div className="hero-head">
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item">
           Hakuna
          </a>
          <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
</a>
        </div>
        <div className="navbar-menu" id="navMenu">
          <div className="navbar-end">
             {
        entries.itemlist.map((slide) => {
          return <SlideEntry key={slide.href} href={slide.href} title={slide.title}  /> }
        )
        }
           
          </div>
        </div>
      </div>
    </nav>
  </div>

  
  <div className="hero-body">
    <div className="container has-text-centered">
      <p className="title">
        Hakuna Matata
      </p>
      <p className="subtitle">
        Spiaggia a Ostia
      </p>
    </div>
  </div>



</section>


)
}

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" className on both the "navbar-burger" and the "navbar-menu"
        el.classNameList.toggle('is-active');
        $target.classNameList.toggle('is-active');

      });
    });
  }

});

export default Banner;