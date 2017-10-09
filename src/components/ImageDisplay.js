import React, { Component } from 'react';

export default class ImageDisplay extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="images">
        <img className="rover-images" src={this.props.photo} alt="rover-images"/>
      </div>
    )
  }
}
