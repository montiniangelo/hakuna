
import React from 'react';
import './master.css';

class SlideEntry extends React.Component {

  render() {

    // console.log("this.props.caption = " + this.props.caption);
    // console.log("this.props.location = " + this.props.location);
    // console.log("this.props.src = " + this.props.src);
    // console.log("-------------------------------");

    const slide_path = "../" + this.props.href;

    return  <a href={slide_path} class="navbar-item is-active">{this.props.title}</a>
    }

}

export default SlideEntry;
